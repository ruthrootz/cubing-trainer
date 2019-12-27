import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './algorithms.html';
import AlgorithmComponent from './AlgorithmComponent';

@WithRender
@Component({
    components: {
        AlgorithmComponent,
    },
})
export default class Algorithms extends Vue {

    private intermediateAlgorithmsFirst: object[] = [
        {
            algId: 1,
            name: 'line',
            steps: '.F.(RUR\'U\').F\'.',
        },
        {
            algId: 2,
            name: 'small-l',
            steps: '.f.(RUR\'U\').f\'.',
        },
        {
            algId: 3,
            name: 'dot',
            steps: '.RU2.(R2\'FRF\').U2.(R\'FRF\').',
        },
    ];

    private intermediateAlgorithmsSecond: object[] = [
        {
            algId: 4,
            name: 'sune',
            steps: '.(RUR\'U).(RU2R\').',
        },
    ];

}
