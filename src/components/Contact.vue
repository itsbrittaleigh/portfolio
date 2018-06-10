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
        <form action="https://formspree.io/rodenbeck.britta@gmail.com" method="POST" id="form">
          <div class="col-rt">
            <div class="field">
              <label for="name" class="label">Full name</label>
              <input inputmode="text" name="name" class="input" id="name">
            </div>
            <div class="field">
              <label for="email" class="label">E-mail address</label>
              <input inputmode="email" name="email" class="input" id="email">
            </div>
            <div class="field">
              <label for="animal" class="label">Favorite animal</label>
              <input inputmode="text" name="animal" class="input" id="animal">
            </div>
          </div>
          <div class="col-lt">
            <div class="field">
              <label for="message" class="label">What can I help you with?</label>
              <textarea name="message" class="input" id="message"></textarea>
            </div>
          </div>
          <div class="button-container">
            <img
              src="../assets/images/img-postmark.png"
              alt="Postmark illustration Detroit MI Rockford IL 2018"
            >
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {};
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
