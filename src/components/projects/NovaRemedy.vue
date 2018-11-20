<template>
  <div class="wrapper">
    <img
      src="../../assets/images/covers/nova.png"
      alt="Nova Remedy website screenshot"
      class="hero--mockup p-t-175"
    >
    <h2 class="headline hidden" v-in-viewport.once>Project Overview</h2>
    <project-overview :project="project"></project-overview>
  </div>
</template>

<script>
export default {
  name: 'NovaRemedy',
  props: ['project'],
  data() {
    return {};
  },
};
</script>
