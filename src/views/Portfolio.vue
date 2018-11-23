<template>
  <div class="main-content">
    <section class="hero-section">
      <picture>
        <source
          media="(min-width: 1200px)"
          srcset="../assets/images/covers/portfolio--xlarge.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 1200px)"
          srcset="../assets/images/covers/portfolio--xlarge.png"
          type="image/png"
        >
        <source
          media="(min-width: 780px)"
          srcset="../assets/images/covers/portfolio--large.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 780px)"
          srcset="../assets/images/covers/portfolio--large.png"
          type="image/png"
        >
        <source
          media="(min-width: 560px)"
          srcset="../assets/images/covers/portfolio--medium.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 560px)"
          srcset="../assets/images/covers/portfolio--medium.png"
          type="image/png"
        >
        <source
          media="(max-width: 560px)"
          srcset="../assets/images/covers/portfolio--small.webp"
          type="image/webp"
        >
        <source
          media="(max-width: 560px)"
          srcset="../assets/images/covers/portfolio--small.png"
          type="image/png"
        >
        <img
          src="../assets/images/covers/portfolio--large.png"
          alt="Skyline photo of Paris, France overlooking the Seine river"
          class="hero-section__background-image"
        >
      </picture>
      <div class="hero-section__overlay"></div>
      <div class="content">
        <img
          src="../assets/images/portfolio-white.svg"
          alt="Icon of resposive web design showing computer monitor and mobile phone"
          class="signature signature--home"
          v-in-viewport.once
        >
        <h1
          class="tagline tagline--bottom tagline--right"
          v-in-viewport.once
        >
          Portfolio projects
        </h1>
      </div>
    </section>
    <section
      v-for="project in projects"
      :key="project.slug"
      class="project"
    >
      <div class="wrapper">
        <h2 class="headline hidden" v-in-viewport.once>{{ project.name }}</h2>
        <div class="project">
          <picture>
            <source
              media="(min-width: 1200px)"
              :srcset="project.cover.xlargeWebp"
              type="image/webp"
            >
            <source
              media="(min-width: 1200px)"
              :srcset="project.cover.xlarge"
              type="image/png"
            >
            <source
              media="(min-width: 780px)"
              :srcset="project.cover.largeWebp"
              type="image/webp"
            >
            <source
              media="(min-width: 780px)"
              :srcset="project.cover.large"
              type="image/png"
            >
            <source
              media="(min-width: 560px)"
              :srcset="project.cover.mediumWebp"
              type="image/webp"
            >
            <source
              media="(min-width: 560px)"
              :srcset="project.cover.medium"
              type="image/png"
            >
            <source
              media="(max-width: 560px)"
              :srcset="project.cover.smallWebp"
              type="image/webp"
            >
            <source
              media="(max-width: 560px)"
              :srcset="project.cover.small"
              type="image/png"
            >
            <img
              :src="project.cover.large"
              :alt="`${project.name} screenshot mockup`"
              class="project__image hidden"
              v-in-viewport.once
            >
          </picture>
          <router-link
            :to="{
              name: 'project',
              params: {
                title: project.slug,
              },
            }"
            :title="`${project.name} project overview`"
            class="hidden button button--arrow-right project__button"
            v-in-viewport.once
          >
            Learn more
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Portfolio',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
};
</script>
