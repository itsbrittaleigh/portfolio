<template>
  <footer>
    <div class="social-icons">
      <a href="https://github.com/brodenbeck" class="icon-container">
        <img src="../assets/images/github-icon.png" alt="Github icon">
      </a>
      <a href="https://www.linkedin.com/in/brittarodenbeck/" class="icon-container">
        <img src="../assets/images/linkedin-icon.png" alt="Linkedin icon">
      </a>
      <a href="mailto:rodenbeck.britta@gmail.com" class="icon-container">
        <img src="../assets/images/email-icon.png" alt="Email icon">
      </a>
    </div>
    <p>&copy; 2018 Britta Rodenbeck</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
footer {
  padding: 25px 0 80px;
  background-color: $sage;
  color: $pearl;
  p {
    text-align: center;
    font-family: $serif;
    text-transform: lowercase;
  }
  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-container {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>
