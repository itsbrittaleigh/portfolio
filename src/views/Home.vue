<template>
  <div class="main-content">
    <section class="hero-section">
      <img src="../assets/images/covers/home.jpg" alt="" class="hero-section__background-image">
      <div class="hero-section__overlay"></div>
      <div class="content">
        <img
          src="../assets/images/signature.png"
          class="signature signature--home"
          v-in-viewport.once
        >
        <h1
          class="tagline tagline--bottom tagline--right"
          v-in-viewport.once
        >
          Front-end & ui developer
        </h1>
      </div>
    </section>
    <div class="wrapper">
      <div class="flex-container--desktop flex-between align-end">
        <div class="content">
          <h2 class="headline hidden" v-in-viewport.once>About Me</h2>
          <p class="hidden" v-in-viewport.once>
            I am a front-end developer because I wanted to work every day in a capacity that
            allowed me to solve problems by using my creativity. I am passionate about
            building engaging, thoughtful, clean, and aesthetically pleasing user interfaces
            with an emphasis on practical and ethical user experience while creatively solving
            problems.
          </p>
        </div>
        <div class="icon__container m-l-50">
          <img
            src="../assets/images/about-straight-bangs.svg"
            class="icon__image hidden"
            v-in-viewport.once
          >
        </div>
      </div>
      <h2 class="headline hidden" v-in-viewport.once>My Work</h2>
      <section
        v-for="project in projects.slice(0,3)"
        :key="project.slug"
        class="project"
      >
        <div class="wrapper">
          <h2
            class="headline headline--no-background hidden"
            v-in-viewport.once
          >
            {{ project.name }}
          </h2>
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
      <router-link
        :to="{
          name: 'portfolio'
        }"
      >
        View all projects
      </router-link>
      <div class="icon__container">
        <img
          src="../assets/images/portfolio.svg"
          class="icon__image hidden"
          v-in-viewport.once
        >
      </div>
      <h2 class="headline hidden" v-in-viewport.once>Contact Me</h2>
    </div>
    <section class="hero-section hero-section--form">
      <img src="../assets/images/covers/form.jpg" alt="" class="hero-section__background-image">
      <div class="hero-section__overlay"></div>
      <div class="content">
        <div class="wrapper">
          <contact-form></contact-form>
        </div>
      </div>
    </section>
    <div class="wrapper">
      <div class="icon__container">
        <img
          src="../assets/images/contact.svg"
          class="icon__image hidden"
          v-in-viewport.once
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'App',
  components: {
    'contact-form': ContactForm,
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
};
</script>

<style lang="scss">
@import '../assets/styles/app';
</style>
