<template>
  <form name="contact" action="" method="POST" id="form" netlify-honeypot="bot-field" netlify>
    <p class="hidden">
      <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
    </p>
    <div class="col-rt">
      <div class="field">
        <label
          for="name"
          :class="{'label': true, lift: liftName }"
        >
          Full name
        </label>
        <input inputmode="text" name="name" class="input" id="name" v-model="contact.name">
      </div>
      <div class="field">
        <label
          for="email"
          :class="{'label': true, lift: liftEmail }"
        >
          E-mail address
        </label>
        <input inputmode="email" name="email" class="input" id="email" v-model="contact.email">
      </div>
      <div class="field">
        <label
          for="animal"
          :class="{'label': true, lift: liftAnimal }"
        >
          Favorite animal
        </label>
        <input inputmode="text" name="animal" class="input" id="animal" v-model="contact.animal">
      </div>
    </div>
    <div class="col-lt">
      <div class="field">
        <label
          for="message"
          :class="{'label': true, lift: liftMessage }"
        >
          What can I help you with?
        </label>
        <textarea name="message" class="input" id="message" v-model="contact.message"></textarea>
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
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      contact: {
        name: '',
        email: '',
        animal: '',
        message: '',
      },
      errors: [],
    };
  },
  computed: {
    liftName() {
      return this.contact.name;
    },
    liftEmail() {
      return this.contact.email;
    },
    liftAnimal() {
      return this.contact.animal;
    },
    liftMessage() {
      return this.contact.message;
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
  visibility: hidden;
}
</style>

