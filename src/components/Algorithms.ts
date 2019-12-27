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
        {
            algId: 5,
            name: 'anti-sune',
            steps: '.(L\'U\'LU\').(L\'U2 L).',
        },
        {
            algId: 6,
            name: 'h',
            steps: '.F.(RUR\'U\').(RUR\'U\').(RUR\'U\').F\'.',
        },
        {
            algId: 7,
            name: 'pi',
            steps: '.RU2.(R2\'U\'R2U\').(R2\'U2R).',
        },
        {
            algId: 8,
            name: 'headlights',
            steps: '.R2D.(R\'U2R).D\'.(R\'U2R\').',
        },
        {
            algId: 9,
            name: 't',
            steps: '.(rUR\'U\').(r\'FRF\').',
        },
        {
            algId: 10,
            name: 'bowtie',
            steps: '.F\'.(rUR\'U\').(r\'FR).',
        },
    ];

}
