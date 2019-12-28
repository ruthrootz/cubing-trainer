<template>
  <div class="algorithms">
    <AlgorithmsComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AlgorithmsComponent from '@/components/AlgorithmsComponent.ts';

export default {
  name: 'algorithms-component',
  components: {
    AlgorithmsComponent,
  },
};
</script>
