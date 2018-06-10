<template>
  <section id="portfolio" class="full-height-section">
    <div class="wrapper">
      <header class="section-heading">
        <img src="../assets/images/icons/portfolio.png" alt="Portfolio icon" class="icon">
        <h2><span class="emphasis">Portfolio</span> <sub>Projects</sub></h2>
      </header>
      <div class="content">
        <p>This section is currently under construction. Please check back soon for updates!</p>
        <p>In the meantime, feel free to <a href="/images/resume_rodenbeck.pdf" target="_blank">download my resume</a> or check out my <a href="https://github.com/brodenbeck" target="_blank">GitHub</a> or <a href="https://linkedin.com/in/brittarodenbeck" target="_blank">LinkedIn</a> accounts.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
#portfolio {
  .content {
    padding: 30px 0 0;
  }
  p {
    color: $navy;
    font-family: $sans;
  }
  a {
    color: $coral;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>

