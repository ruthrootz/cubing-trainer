import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './timer-component.html';
import { SolveLog } from '@/models/SolveLog';
require('../styles/timer-component.css');

@WithRender
@Component
export default class TimerComponent extends Vue {

    private time: number = 0;
    private timerRunning = false;
    private solveNumber = 1;

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

    private mounted(): void {
        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 32) {
                this.timerTrigger();
            }
            if (e.keyCode === 27) {
                this.clearTimer();
            }
        });
    }

    private timerTrigger(): void {
        if (this.timerRunning) {
            this.timerRunning = false;
            this.solves.push(new SolveLog(this.solveNumber++, 0, null, Math.round(this.time * 1000) / 1000, false));
            console.log(this.solves);
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

}
