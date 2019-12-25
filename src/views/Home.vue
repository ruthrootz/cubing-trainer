<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld message="Welcome to your Vue.js app!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.ts';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
