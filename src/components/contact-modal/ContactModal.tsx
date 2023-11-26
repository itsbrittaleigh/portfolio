import React, { useEffect, useRef, useState } from 'react';
import './contact-modal.css';

interface IContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IFormData {
  name: string;
  email: string;
  message: string;
}

const ContactModal: React.FC<IContactModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form validation
  const [errors, setErrors] = useState<string[]>([]);
  const [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => {
    const handleEscapeKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const checkIfClickedOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen && modalRef) {
      document.addEventListener('keydown', handleEscapeKeyPress);
      // Slight timeout to allow component to mount, allowing open button to be clickable
      setTimeout(() => {
        document.addEventListener('click', checkIfClickedOutside);
      }, 1);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isOpen, onClose]);

  return (
    <section
      className={`modal ${isOpen ? 'is-active' : ''}`}
      id="contact-modal"
    >
      <div className="modal__overlay" />
      {isOpen && (
        <div className="modal__card" id="modal-card" ref={modalRef}>
          <button
            aria-label="Close contact modal"
            className="modal__close-button"
            id="close-button"
            onClick={onClose}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="close-title">
              <title id="close-title">Close icon</title>
              <path d="M7 5.58599L11.95 0.635986L13.364 2.04999L8.414 6.99999L13.364 11.95L11.95 13.364L7 8.41399L2.05 13.364L0.636002 11.95L5.586 6.99999L0.636002 2.04999L2.05 0.635986L7 5.58599Z" fill="#121212"/>
            </svg>
          </button>
          <h2>Give me a shout</h2>
          {!!errors.length && (
            <ul id="errors-container" className="errors__container">
              {errors.map((error) => (
                <li className="errors__error-item">{error.toString()}</li>
              ))}
            </ul>
          )}
          {isSuccessful && (
            <p className="success">
              Your form was submitted successfully. I'll be in contact with you shortly.
            </p>
          )}
          <form className={isSuccessful ? 'is-hidden' : ''} name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Email address
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Message
              <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </label>
            <div className="button-container">
              <button className="button" type="submit">Send</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );

  function handleSubmit(event: any) {
    event.preventDefault();
    const formData = {
      name,
      email,
      message
    };
    const formErrors = getErrors(formData);

    if (formErrors.length === 0) {
      submitForm(formData);
    }
  };

  function getErrors(formData: IFormData) {
    setErrors([]);
    let errors = [];
    const name = formData.name;
    const email = formData.email;
    const message = formData.message;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

    setErrors(errors);
    return errors;
  };

  function submitForm(formData: any) {
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...formData
      }).toString(),
    })
      .then(() => setIsSuccessful(true))
      .catch((error) => alert(error));
  };
};

export default ContactModal;
