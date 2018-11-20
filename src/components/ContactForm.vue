<template>
  <form method="post" @submit.prevent="checkForm">
    <input type="hidden" name="form-name" value="contact">
    <p
      v-for="(error, index) in errors"
      :key="index"
      :class="{
        'is-marginless color-white text-center p-b-5': true,
        'm-b-40': index === errors.length - 1,
      }"
    >
      <span class="color-red weight-bold">!&nbsp;</span>
      {{ error }}
      <span class="color-red weight-bold">!&nbsp;</span>
    </p>
    <p
      v-if="wasSuccessful"
      class="text-center color-white"
    >
      Thank you! I have received your message and will be responding soon.
    </p>
    <template v-else class="fields">
      <p class="hidden">
        <label>Don’t fill this out: <input name="bot-field"></label>
      </p>
      <div class="flex-container--desktop flex-between">
        <div class="field m-r-20 hidden" v-in-viewport.once>
          <label for="name">Name</label>
          <input name="name" type="text" v-model="name">
        </div>
        <div class="field hidden" v-in-viewport.once>
          <label for="email">Email</label>
          <input name="email" type="email" v-model="email">
        </div>
      </div>
      <div class="field hidden" v-in-viewport.once>
        <label for="message">Message</label>
        <textarea name="message" v-model="message"></textarea>
      </div>
      <div class="contact-form__button-container hidden" v-in-viewport.once>
        <button type="submit">Send</button>
      </div>
    </template>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: [],
      wasSuccessful: false,
    };
  },
  computed: {
    form() {
      return {
        name: this.name,
        email: this.email,
        message: this.message,
      };
    },
  },
  methods: {
    checkForm(event) {
      this.errors = [];
      if (!this.name) this.errors.push('Your name is required.');
      if (!this.email) this.errors.push('You must provide your email.');
      else if (!this.validateEmail(this.email)) this.errors.push('You must provide a valid email address');
      if (!this.message) this.errors.push('You must write a message.');
      if (this.errors.length === 0) this.handleSubmit();
      else event.preventDefault();
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.form }),
      })
        .then(this.wasSuccessful = true)
        .catch(error => this.errors.push(error));
    },
  },
};
</script>
