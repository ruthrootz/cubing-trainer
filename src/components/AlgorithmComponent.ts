import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './algorithm-component.html';
require('../styles/algorithm-component.css');

@WithRender
@Component
export default class AlgorithmComponent extends Vue {

    @Prop()
    private algName: string;
    @Prop()
    private steps: string;
    private stepsLink: string = '';
    private imageSource: string = '';

    private created(): void {
        this.stepsLink = 'https://alg.cubing.net/?view=playback&type=alg&title=OLL%20Case%2027%20Sune&setup=._x2_.&alg='
        + this.steps.replace('\'', '-');
    }

}
