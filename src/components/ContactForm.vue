<template>
  <form method="post" @submit.prevent="handleSubmit">
    <p v-if="wasSuccessful">Thank you! I'll be in touch shortly.</p>
    <template v-else>
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
          <input inputmode="text" name="name" class="input" id="name" v-model="name">
        </div>
        <div class="field">
          <label
            for="email"
            :class="{'label': true, lift: liftEmail }"
          >
            E-mail address
          </label>
          <input inputmode="email" name="email" class="input" id="email" v-model="email">
        </div>
        <div class="field">
          <label
            for="animal"
            :class="{'label': true, lift: liftAnimal }"
          >
            Favorite animal
          </label>
          <input inputmode="text" name="animal" class="input" id="animal" v-model="animal">
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
          <textarea name="message" class="input" id="message" v-model="message"></textarea>
        </div>
      </div>
      <div class="button-container">
        <img
          src="../assets/images/img-postmark.png"
          alt="Postmark illustration Detroit MI Rockford IL 2018"
        >
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
      animal: '',
      message: '',
      errors: [],
      wasSuccessful: false,
    };
  },
  computed: {
    liftName() {
      return this.name;
    },
    liftEmail() {
      return this.email;
    },
    liftAnimal() {
      return this.animal;
    },
    liftMessage() {
      return this.message;
    },
    form() {
      return {
        name: this.name,
        email: this.email,
        animal: this.animal,
        message: this.message,
      };
    },
  },
  methods: {
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

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.hidden {
  display: none;
  visibility: hidden;
}
form {
  > p {
    width: 100%;
    text-align: right;
    padding-right: 40px;
  }
  .field {
    position: relative;
    margin-bottom: 15px;
  }
  .label {
    font-family: $sans;
    position: absolute;
    top: 10px;
    left: 7px;
    padding: 0 3px;
    color: $navy;
    opacity: 0.5;
    transition: 0.3s;
    &.lift {
      background-color: white;
      font-size: 12px;
      top: -6px;
      opacity: 1;
    }
  }
  input,
  textarea {
    width: 100%;
    display: block;
    font-family: $sans;
    font-size: 16px;
    background: transparent;
    &.error {
      border-color: darken($coral, 20%);
    }
  }
  input {
    border: solid $navy;
    border-width: 0 0 1px 0;
    padding: 10px;
  }
  textarea {
    border: 1px solid $navy;
    padding: 10px;
    height: 100px;
    border-radius: 2px;
  }
  label.error {
    color: darken($coral, 20%);
    display: block;
    text-align: right;
    font-size: 12px;
    font-family: $serif;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    img {
      width: 50%;
      max-width: 300px;
    }
    button {
      outline: none;
      border: none;
      border-radius: 2px;
      background: $rose;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 16px;
      font-family: $sans;
      padding: 10px;
      width: 25%;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        background: darken($rose, 10%);
      }
    }
  }
  @media only screen and (min-width: $arya) {
    background: url(../assets/images/bg-postcard.png) no-repeat center center;
    min-height: 550px;
    background-size: 100% auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 119px 40px;
    width: 738px;
    max-width: 738px;
    position: relative;
    .col-lt {
      order: 1;
      width: calc(50% - 25px);
    }
    .col-rt {
      order: 2;
      width: calc(50% - 25px);
    }
    .label.lift {
      background: $pearl;
    }
    textarea {
      height: 300px;
    }
    .button-container {
      position: absolute;
      bottom: 30px;
      right: 30px;
      button {
        width: auto;
        padding: 15px 20px;
      }
      img {
        display: none;
        visibility: hidden;
      }
    }
  }
}
</style>

