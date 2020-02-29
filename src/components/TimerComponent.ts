import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './timer-component.html';
require('../styles/timer-component.css');

@WithRender
@Component
export default class TimerComponent extends Vue {

    private time: number = 0;
    private timerRunning = false;

    private mounted(): void {
        window.addEventListener('keyup', (e) => {
            if (e.keyCode !== 27) {
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
