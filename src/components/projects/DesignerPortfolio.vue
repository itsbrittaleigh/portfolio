<template>
  <div class="wrapper">
    <picture>
      <source
        media="(min-width: 1200px)"
        srcset="../../assets/images/covers/designer-portfolio--xlarge.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 1200px)"
        srcset="../../assets/images/covers/designer-portfolio--xlarge.png"
        type="image/png"
      >
      <source
        media="(min-width: 780px)"
        srcset="../../assets/images/covers/designer-portfolio--large.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 780px)"
        srcset="../../assets/images/covers/designer-portfolio--large.png"
        type="image/png"
      >
      <source
        media="(min-width: 560px)"
        srcset="../../assets/images/covers/designer-portfolio--medium.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 560px)"
        srcset="../../assets/images/covers/designer-portfolio--medium.png"
        type="image/png"
      >
      <source
        media="(max-width: 560px)"
        srcset="../../assets/images/covers/designer-portfolio--small.webp"
        type="image/webp"
      >
      <source
        media="(max-width: 560px)"
        srcset="../../assets/images/covers/designer-portfolio--small.png"
        type="image/png"
      >
      <img
        src="../../assets/images/covers/designer-portfolio--large.png"
        alt="Designer portfolio website screenshot"
        class="hero--mockup p-t-175"
      >
    </picture>
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
