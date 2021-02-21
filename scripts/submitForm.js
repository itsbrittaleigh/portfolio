const formEl = document.querySelector('#contact-form');
const errorsEl = document.querySelector('#errors-container');
const successEl = document.querySelector('#success-container');

/**
 * Validate form for errors
 * @param {*} formData 
 */
const getErrors = (formData) => {
  let errors = [];
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!name) {
    errors.push('Please tell me your name.');
  }

  if (!email) {
    errors.push('Please tell me your email address.');
  }

  if (email && !emailRegex.test(String(email).toLowerCase())) {
    errors.push('You must give me a valid email address.')
  }

  if (!message) {
    errors.push('You must write a message - tell me why you\'re reaching out.')
  }

  return errors;
};

/**
 * Display errors in UI
 * @param {Array} errors 
 */
const displayErrors = (errors) => {
  errorsEl.innerHTML = '';
  errors.forEach((error) => {
    errorsEl.innerHTML += `<li class="errors__error-item">${error}</li>`;
  });
};

const onSuccessCB = () => {
  successEl.classList.add('is-visible');
  formEl.classList.add('is-hidden');
};

/**
 * Submit data to Netlify
 * @param {*} formData 
 */
const submitForm = (formData) => {
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then((data) => onSuccessCB(data))
    .catch((error) => alert(error));
};

/**
 * Handle form submission, validation, error handling
 * @param {*} event 
 */
const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const formErrors = getErrors(formData);

  if (formErrors.length > 0) {
    displayErrors(formErrors);
  } else {
    submitForm(formData);
  }
};

formEl.addEventListener('submit', handleSubmit);
