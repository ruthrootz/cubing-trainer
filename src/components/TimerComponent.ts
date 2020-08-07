import { Component, Vue } from 'vue-property-decorator';
import WithRender from './timer-component.html';
import { SolveLog } from '@/models/SolveLog';
import { saveAs } from 'file-saver';
const cubeScrambler = require('cube-scrambler')();
const json2csv = require('json-2-csv');
const csv2json = require('csvtojson');
require('../styles/timer-component.css');

@WithRender
@Component
export default class TimerComponent extends Vue {

    private time: number = 0;
    private timerRunning: boolean = false;
    private solveNumber: number = 1;
    private scramble: string = cubeScrambler.scramble().toString().split(',').join(' ');

    private fields: any[] = [
        { key: 'id', label: 'Solve Id' },
        { key: 'time', label: 'Time' },
        { key: 'dnf', label: 'DNF' },
    ];

    private solves: SolveLog[] = [
        {
            id: 0,
            sessionId: 0,
            userId: null,
            time: 45.0,
            dnf: true,
        },
    ];

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
        window.onload = () => { 
            this.$notify({
                group: 'notifications',
                text: 'Use SPACEBAR to start/stop timer. Use ESC to clear the timer.',
                duration: -1,
            });
            this.$notify({
                group: 'notifications',
                text: 'Click on the X in the DNF box to toggle DNF status.',
                duration: -1,
            });
        }
    }

    private timerTrigger(): void {
        if (this.timerRunning) {
            this.timerRunning = false;
            this.solves.push(new SolveLog(this.solveNumber++, 0, null, Math.round(this.time * 1000) / 1000, false));
            this.scramble = cubeScrambler.scramble().toString().split(',').join(' ');
        } else {
            this.timerRunning = true;
            this.time = 0;
            this.tick();
        }
    }

    private tick(): void {
        setTimeout( () => {
            if (this.timerRunning) {
                this.tick();
            }
            this.time += 0.01;
        }, 10 );
    }

    private clearTimer(): void {
        this.timerRunning = false;
        this.time = 0;
    }

    private toggleDNF(solve: SolveLog): void {
        solve.dnf = !solve.dnf;
    }

    private exportSolves(): void {
        json2csv.json2csv(this.solves, (err, csv) => {
            if (err) {
                console.error(err);
            }
            const blob = new Blob([csv], {
                type: 'data:text/csv;charset=utf-8'
            });
            saveAs(blob, 'solves.csv');
        });
    }

    private openSolves(): void {
        let fileSelector = document.getElementById('file-input');
        fileSelector.click();
    }

    private async importSolves(e: Event): Promise<void> {
        const filePath = (e.target as HTMLInputElement).files[0];
        try {
            this.solves = await csv2json().fromFile(filePath);
        }
        catch(error) {
            console.error(error);
        }
    }

}
