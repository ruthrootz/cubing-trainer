import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './timer-component.html';
require('../styles/timer-component.css');

@WithRender
@Component
export default class TimerComponent extends Vue {

    private time: number = 0;

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
        this.time++;
    }

    private clearTimer(): void {
        this.time = 0;
    }

}
