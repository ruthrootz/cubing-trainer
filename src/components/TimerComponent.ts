import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './timer-component.html';
import { SolveLog } from '@/models/SolveLog';
const cubeScrambler = require('cube-scrambler')();
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
        window.addEventListener('keyup', (e: KeyboardEvent): void => {
            if (e.keyCode === 32) {
                this.timerTrigger();
            }
            if (e.keyCode === 27) {
                this.clearTimer();
            }
        });
        window.onkeydown = (e: KeyboardEvent): boolean => {
            return !(e.keyCode === 32 && e.target === document.body);
        };
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

}
