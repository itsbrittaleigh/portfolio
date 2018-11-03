<template>
  <div class="main-content">
    <section class="hero-section">
      <img
        src="../assets/images/covers/portfolio.jpg"
        class="hero-section__background-image"
      >
      <div class="hero-section__overlay"></div>
      <div class="content">
        <img
          src="../assets/images/portfolio-white.svg"
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
          <img :src="project.cover" alt="" class="hidden project__image" v-in-viewport.once>
          <router-link
            :to="{
              name: 'project',
              params: {
                title: project.slug,
              },
            }"
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
