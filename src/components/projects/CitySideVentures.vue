<template>
  <div class="wrapper">
    <picture>
      <source
        media="(min-width: 1200px)"
        srcset="../../assets/images/covers/city-side-ventures--xlarge.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 1200px)"
        srcset="../../assets/images/covers/city-side-ventures--xlarge.png"
        type="image/png"
      >
      <source
        media="(min-width: 780px)"
        srcset="../../assets/images/covers/city-side-ventures--large.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 780px)"
        srcset="../../assets/images/covers/city-side-ventures--large.png"
        type="image/png"
      >
      <source
        media="(min-width: 560px)"
        srcset="../../assets/images/covers/city-side-ventures--medium.webp"
        type="image/webp"
      >
      <source
        media="(min-width: 560px)"
        srcset="../../assets/images/covers/city-side-ventures--medium.png"
        type="image/png"
      >
      <source
        media="(max-width: 560px)"
        srcset="../../assets/images/covers/city-side-ventures--small.webp"
        type="image/webp"
      >
      <source
        media="(max-width: 560px)"
        srcset="../../assets/images/covers/city-side-ventures--small.png"
        type="image/png"
      >
      <img
        src="../../assets/images/covers/city-side-ventures--large.png"
        alt="City Side Ventures website screenshot"
        class="hero--mockup p-t-175"
      >
    </picture>
    <h2 class="headline hidden" v-in-viewport.once>Project Overview</h2>
    <project-overview :project="project"></project-overview>
  </div>
</template>

<script>
export default {
  name: 'CitySideVentures',
  props: ['project'],
  data() {
    return {};
  },
};
</script>
