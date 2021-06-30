import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './AlgorithmsComponent.html';
import AlgorithmComponent from './AlgorithmComponent';

@WithRender
@Component({
    components: {
        AlgorithmComponent,
    },
})
export default class AlgorithmsComponent extends Vue {

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
            steps: '.(L\'U\'LU\').(L\'U2L).',
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

    private intermediateAlgorithmsThird: object[] = [
        {
            algId: 11,
            name: 'headlights-back',
            steps: '.x\'.(R\'DR\').U2\'.(RD\'R\').U2\'R2F\'x.',
        },
        {
            algId: 12,
            name: 'no-headlights',
            steps: '.FRU\'R\'U\'RUR\'F\'.(RUR\'U\').(R\'FRF\').',
        },
    ];

    private intermediateAlgorithmsFourth: object[] = [
        {
            algId: 13,
            name: 'ua',
            steps: '.M2\'UMU2M\'UM2\'.',
        },
        {
            algId: 14,
            name: 'ub',
            steps: '.M2\'U\'MU2\'M\'U\'M2\'.',
        },
        {
            algId: 15,
            name: 'z',
            steps: '.(M2\'U\'M2\'U\').M\'.(U2M2\'U2).M\'.',
        },
        {
            algId: 16,
            name: 'h-last',
            steps: '.(M2\'UM2\').U2.(M2\'UM2\').',
        },
    ];

}
