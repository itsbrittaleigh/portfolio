<template>
  <div class="wrapper">
    <picture>
      <source
        media="(min-width: 1200px)"
        srcset="../../assets/images/covers/tusstar--xlarge.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 1200px)"
        srcset="../../assets/images/covers/tusstar--xlarge.png"
        type="image/png"
      >
      <source
        media="(min-width: 780px)"
        srcset="../../assets/images/covers/tusstar--large.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 780px)"
        srcset="../../assets/images/covers/tusstar--large.png"
        type="image/png"
      >
      <source
        media="(min-width: 560px)"
        srcset="../../assets/images/covers/tusstar--medium.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 560px)"
        srcset="../../assets/images/covers/tusstar--medium.png"
        type="image/png"
      >
      <source
        media="(max-width: 560px)"
        srcset="../../assets/images/covers/tusstar--small.webp"
        type="image/webp"
      >
      <source
        media="(max-width: 560px)"
        srcset="../../assets/images/covers/tusstar--small.png"
        type="image/png"
      >
      <img
        src="../../assets/images/covers/tusstar--large.png"
        alt="TusStar website screenshot"
        class="hero--mockup p-t-175"
      >
    </picture>
    <h2 class="headline hidden" v-in-viewport.once>Project Overview</h2>
    <project-overview :project="project"></project-overview>
  </div>
</template>

<script>
export default {
  name: 'TusStar',
  props: ['project'],
  data() {
    return {};
  },
};
</script>
