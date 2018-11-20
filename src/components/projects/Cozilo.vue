<template>
  <div class="wrapper">
    <img
      src="../../assets/images/covers/cozilo.png"
      alt="Cozilo website screenshot"
      class="hero--mockup p-t-175"
    >
    <h2 class="headline hidden" v-in-viewport.once>Project Overview</h2>
    <project-overview :project="project"></project-overview>
  </div>
</template>

<script>
export default {
  name: 'Cozilo',
  props: ['project'],
  data() {
    return {};
  },
};
</script>
