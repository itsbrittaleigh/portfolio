<template>
  <section class="introduction full-height-section">
    <div class="wrapper">
      <header>
        <img src="../assets/images/signature.png" alt="Britta Leigh Rodenbeck">
      </header>
      <p class="title">Web Developer</p>
      <p class="locations">Detroit, MI <span class="bullet">&bull;</span> Rockford, IL</p>
    </div>
    <div id="navigation-menu-button" class="burger-container">
      <div class="mmm-burgers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav id="navigation-menu">
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Introduction',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.introduction {
  background: url(../assets/images/bg-introduction.png) center center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 580px;
    display: block;
    margin: 0 auto 60px;
  }
  p {
    color: $pearl;
    font-family: $serif;
    text-align: center;
    font-weight: 100;
    letter-spacing: 2px;
    &.title {
      font-size: 22px;
    }
    &.locations {
      text-transform: uppercase;
      font-size: 14px;
      opacity: 0.6;
      margin-bottom: 100px;
      .bullet {
        padding: 0 10px;
      }
    }
  }
  header {
    position: relative;
    p {
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
      text-transform: uppercase;
      font-family: $sans;
      letter-spacing: 6px;
      opacity: 0.15;
      margin: 0;
      font-size: 22px;
      z-index: 2;
      color: $rose;
    }
  }
}
</style>
