import { Component, Vue, Prop } from 'vue-property-decorator';
import WithRender from './algorithms.html';
import Algorithm from './Algorithm';

@WithRender
@Component({
    components: {
        Algorithm,
    },
})
export default class Algorithms extends Vue {

}
