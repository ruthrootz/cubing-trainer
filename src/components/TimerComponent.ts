import { Component, Vue } from 'vue-property-decorator';
import { SolveLog } from '@/models/SolveLog';
import { saveAs } from 'file-saver';
import WithRender from './timer-component.html';
import Chart from 'chart.js';
import _ from 'lodash';
const cubeScrambler = require('cube-scrambler')();
const papa = require('papaparse');
require('../styles/timer-component.css');

@WithRender
@Component
export default class TimerComponent extends Vue {

    private time: number = 0;
    private timeStart: number;
    private timerRunning: boolean = false;
    private bestTime: boolean = false;
    private solveNumber: number = 0;
    private scramble: string = cubeScrambler.scramble().toString().split(',').join(' ');
    private solvesChart: Chart;

    private fields: any[] = [
        { key: 'id', label: 'Solve Id' },
        { key: 'time', label: 'Time' },
        { key: 'dnf', label: 'DNF' },
    ];

    private solves: SolveLog[] = [];

    private get sessionAverage(): number {
        let sum: number = 0;
        let total: number = 0;
        this.solves.forEach((solve: SolveLog): void => {
            if (!solve.dnf) {
                sum = sum + solve.time;
                total++;
            }
        });
        return sum / total ? sum / total : 0;
    }

    private mounted(): void {
        window.onkeyup = (e: KeyboardEvent): void => {
            if (e.keyCode === 32) {
                this.timerTrigger();
            }
            if (e.keyCode === 27) {
                this.clearTimer();
            }
        };
        window.onkeydown = (e: KeyboardEvent): boolean => {
            return !(e.keyCode === 32 && e.target === document.body);
        };
        const ctx: HTMLElement = document.getElementById('solvesChart');
        this.solvesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    type: 'line',
                    label: 'solve time',
                    data: this.solves.map((s: SolveLog): number => !s.dnf ? s.time : null),
                    backgroundColor: [
                        'rgba(15, 220, 121, 0.2)',
                    ],
                    borderColor: [
                        'rgb(15, 220, 121)',
                    ],
                    borderWidth: 1,
                }],
            },
        });
    }

    private timerTrigger(): void {
        if (this.timerRunning) {
            this.timerRunning = false;
            const currentTime: number = Math.round(this.time * 1000) / 1000;
            const currentBest: SolveLog | null = _.minBy(this.solves.filter((s: SolveLog): boolean => !s.dnf), 'time');
            if (currentBest ? currentBest.time > currentTime : true) {
                this.bestTime = true;
            }
            this.solves.unshift(new SolveLog({ id: this.solveNumber, time: currentTime, dnf: false }));
            this.updateChart();
            this.scramble = cubeScrambler.scramble().toString().split(',').join(' ');
        } else {
            this.timerRunning = true;
            this.bestTime = false;
            this.solveNumber++;
            this.timeStart = Date.now();
            this.time = 0;
            this.tick();
        }
    }

    private tick(): void {
        setTimeout( () => {
            if (this.timerRunning) {
                const delta = Date.now() - this.timeStart;
                this.time = Math.floor(delta / 10) / 100;
                this.tick();
            }
        }, 10);
    }

    private clearTimer(): void {
        this.timerRunning = false;
        this.time = 0;
    }

    private toggleDNF(solve: SolveLog): void {
        solve.dnf = !solve.dnf;
        this.updateChart();
    }

    private exportSolves(): void {
        const csvData: any = papa.unparse(this.solves);
        const blob: Blob = new Blob([csvData], {
            type: 'data:text/csv;charset=utf-8',
        });
        saveAs(blob, 'solves.csv');
    }

    private openSolves(): void {
        const fileSelector: HTMLElement = document.getElementById('file-input');
        fileSelector.click();
    }

    private async importSolves(e: Event): Promise<void> {
        const file: File = (e.target as HTMLInputElement).files[0];
        try {
            papa.parse(file, {
                header: true,
                dynamicTyping: true,
                complete: (results: any): void => {
                    this.solves = results.data.map((s: any): SolveLog => new SolveLog(s));
                    this.updateChart();
                },
            });
        } catch (error) {
            console.error(error);
        }
    }

    private updateChart(): void {
        this.solvesChart.data.labels = this.solves
            .filter((s: SolveLog): boolean => !s.dnf)
                .map((s: SolveLog): number => s.id)
                    .reverse();
        this.solvesChart.data.datasets.forEach((dataset) => {
            dataset.data = this.solves
            .filter((s: SolveLog): boolean => !s.dnf)
                .map((s: SolveLog): number => s.time)
                    .reverse();
        });
        this.solvesChart.update();
    }

    private plusTwoClick(solve: SolveLog): void {
        solve.time += 2;
        solve.isPlusTwo = true;
        this.updateChart();
    }

}
