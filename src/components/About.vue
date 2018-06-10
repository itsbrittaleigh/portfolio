<template>
  <section id="about" class="full-height-section">
    <div class="wrapper">
      <header class="section-heading">
        <img src="../assets/images/icons/about.png" alt="About icon" class="icon">
        <h2><span class="emphasis">About</span> <sub>Britta</sub></h2>
      </header>
    </div>
    <div class="content">
      <div class="wrapper">
        <p>
          Hi, my name is Britta Rodenbeck. After graduating in 2014 with a Bachelor's degree in
          psychology, I, naturally, began making websites. I am located in Detroit, MI and was
          born and raised in Rockford, IL.
        </p>
        <p>
          I have experience in JavaScript (Vue, AngularJS, React), CSS (Sass, Stylus), and PHP
          (Laravel) and love front-end web development and design. I'm currently learning Node
          and React and I'm constantly improving my design abilities.
        </p>
        <p>
          I enjoy traveling, hiking, camping, beer, and baseball.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
#about {
  p {
    font-family: $sans;
    line-height: 1.7;
    color: $navy;
  }
  @media only screen and (min-width: $sansa) {
    .content {
      background: $rose url(../assets/images/bg-polaroids.png) right center;
      background-size: cover;
      > .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      p {
        width: 200px;
        font-weight: bold;
      }
    }
  }
}
</style>

