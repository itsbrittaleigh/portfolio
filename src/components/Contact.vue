<template>
  <section id="contact" class="full-height-section">
    <div class="wrapper">
      <header class="section-heading">
        <img src="../assets/images/icons/contact.png" alt="Contact icon" class="icon">
        <h2><span class="emphasis">Contact</span> <sub>Britta</sub></h2>
      </header>
      <div class="form-container">
        <p>
          Please reach out if you're looking for freelance work, want to talk dev, design, or
          Detroit, or just want to say hi! I will respond to you in 24 hours unless you're spammy
          or rude.
        </p>
        <contact-form></contact-form>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  name: 'Contact',
  data() {
    return {};
  },
  components: {
    'contact-form': ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
#contact {
  p {
    font-family: $sans;
    text-align: center;
    color: $navy;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: $arya) {
    padding: 30px 0 80px;
    p {
      margin-bottom: 50px;
    }
  }
  @media only screen and (min-width: $sansa) {
    .form-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    p {
      flex: 1;
      margin-right: 30px;
    }
  }
}
</style>
