import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './timer-component.html';
require('../styles/timer-component.css');

@WithRender
@Component
export default class TimerComponent extends Vue {

    private time: number = 0;

    private mounted(): void {
        window.addEventListener("keypress", e => {
            console.log(String.fromCharCode(e.keyCode));
        });
    }

    private timerTrigger(): void {
        console.log('test');
    }

}
