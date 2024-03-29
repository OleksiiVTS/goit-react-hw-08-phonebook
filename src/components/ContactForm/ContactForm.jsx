import React from 'react';
import css from './ContactForm.module.css';
import { usePhonebook } from 'redux/usePhonebook';

const ContactForm = () => {
  const { valueContacts, addContacts } = usePhonebook();

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    const revise = valueContacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (revise) {
      alert(`${name} is already in contacts!`);
      return;
    }
    addContacts({ name, number });

    evt.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formDiv}>
        <label>
          Name <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // pattern="/\[a-zA-Za-яА-Я]{10} [a-zA-Za-яА-Я]{10}/"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number <br />
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
