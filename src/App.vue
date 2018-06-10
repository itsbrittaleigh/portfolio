<template>
  <div id="app">
    <britta-introduction></britta-introduction>
    <britta-about></britta-about>
    <britta-portfolio></britta-portfolio>
    <britta-contact></britta-contact>
    <britta-footer></britta-footer>
  </div>
</template>

<script>
import Introduction from './components/Introduction.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    'britta-introduction': Introduction,
    'britta-about': About,
    'britta-portfolio': Portfolio,
    'britta-contact': Contact,
    'britta-footer': Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/app";
</style>
