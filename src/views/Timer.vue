<template>
  <div class="timer">
    <TimerComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import TimerComponent from '@/components/TimerComponent.ts';

export default {
  name: 'timer-component',
  components: {
    TimerComponent,
  },
};
</script>
