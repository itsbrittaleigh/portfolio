const contactButtonEl = document.querySelector('#contact-button');
const modalEl = document.querySelector('#contact-modal');
const modalCardEl = document.querySelector('#modal-card');
const closeButtonEl = document.querySelector('#close-button');

const toggleModal = () => {
  modalEl.classList.toggle('is-active');
};

// open modal when user clicks contact icon
contactButtonEl.addEventListener('click', toggleModal);

// close modal when user clicks close icon
closeButtonEl.addEventListener('click', toggleModal);

// close modal when user clicks outside modal
window.addEventListener('click', function(event) {
  if (
    modalEl.classList.contains('is-active') &&
    !modalCardEl.contains(event.target) &&
    // account for duplicate triggers
    !contactButtonEl.contains(event.target)
  ) {
    toggleModal();
  }
});

// close modal when user hits esc key
window.addEventListener('keydown', (event) => {
  if (
    modalEl.classList.contains('is-active') &&
    event.code === 'Escape'
  ) {
    toggleModal();
  }
});
