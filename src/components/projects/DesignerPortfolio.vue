<template>
  <div class="wrapper">
    <img
      src="../../assets/images/covers/designer-portfolio.png"
      class="hero--mockup p-t-175"
      alt="Designer portfolio website screenshot"
    >
    <h2 class="headline hidden" v-in-viewport.once>Project Overview</h2>
    <project-overview :project="project"></project-overview>
  </div>
</template>

<script>
export default {
  name: 'DesignerPortfolio',
  props: ['project'],
  data() {
    return {};
  },
};
</script>
