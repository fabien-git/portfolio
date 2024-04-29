import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./ContactForm.module.css";
import Title from "../Title/Title";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <Title name={"Contactez-moi !"}/>
    <form onSubmit={sendEmail}>

      <input type="text" name="user_name" className={styles.form_name} placeholder='Nom & prénom'/>

      <input type="email" name="user_email" className={styles.form_email} placeholder='Email'/>

      <textarea name="message" className={styles.form_message}/>
      <input type="submit" value="Envoyer" disabled={isSubmitting} className={styles.form_btn} placeholder='Message' />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
    </div>
    </div>
  );
};
export default ContactForm;
