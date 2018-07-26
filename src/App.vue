<template>
  <div id="app">
    <div class="page">
      <section class="hero-section">
        <img src="./assets/images/covers/home.jpg" alt="" class="hero-section__background-image">
        <div class="hero-section__overlay"></div>
        <div class="content">
          <img src="./assets/images/signature.png" alt="" class="signature signature--home" v-in-viewport.once>
          <h1 class="tagline tagline--bottom" v-in-viewport.once>Front-end & ui developer</h1>
        </div>
      </section>
      <div class="main-content">
        <div class="wrapper">
          <h2 class="headline hidden" v-in-viewport.once>About Me</h2>
          <p class="hidden" v-in-viewport.once>
            I am a front-end developer because I wanted to work every day in a capacity that allowed me to
            solve problems by using my creativity. I am passionate about building engaging, thoughtful,
            clean, and aesthetically pleasing user interfaces with an emphasis on practical and ethical
            user experience while creatively solving problems.
          </p>
          <div class="icon__container">
            <img src="./assets/images/about-straight-bangs.svg" alt="" class="icon__image">
          </div>
          <h2 class="headline hidden" v-in-viewport.once>My Work</h2>
          <p class="hidden" v-in-viewport.once>Coming soon.</p>
          <h2 class="headline hidden" v-in-viewport.once>Contact Me</h2>
        </div>
        <section class="hero-section hero-section--form">
          <img src="./assets/images/covers/form.jpg" alt="" class="hero-section__background-image">
          <div class="hero-section__overlay"></div>
          <div class="content">
            <div class="wrapper">
              <contact-form></contact-form>
            </div>
          </div>
        </section>
        <div class="wrapper">
          <div class="icon__container">
            <img src="./assets/images/contact.svg" alt="" class="icon__image">
          </div>
        </div>
      </div>
      <footer class="footer">
        <p class="footer__text">&copy; 2018 Britta Rodenbeck</p>
      </footer>
    </div>
  </div>
</template>

<script>
import ContactForm from './components/ContactForm';

export default {
  name: 'App',
  components: {
    'contact-form': ContactForm,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/app";
</style>
