<template>
  <div class="home">
    <h1>Cubing Trainer</h1>
    <Algorithms/>
  </div>
</template>

<script>
// @ is an alias to /src
import Algorithms from '@/components/Algorithms.ts';

export default {
  name: 'home',
  components: {
    Algorithms,
  },
};
</script>
