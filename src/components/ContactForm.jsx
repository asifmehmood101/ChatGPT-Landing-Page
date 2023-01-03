import React from 'react';
import { FormInput } from './FormInput';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formInitValue = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm = () => {
  const form = React.useRef();
  const [formValue, setFormValue] = React.useState(formInitValue);
  const [isLoading, setIsLoading] = React.useState(false);
  const { name, email, message } = formValue;

  const emailNotify = (message) => toast(message);

  const HandleFormValue = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setIsLoading((prev) => !prev);
      const sendEmail = await emailjs.sendForm(
        'service_i0s3jmi',
        'template_GS',
        form.current,
        'xxAflGNiRBzVu9P7A',
      );

      const EmailStatus = await sendEmail.status;
      const EmailResult = await sendEmail.text;
      setIsLoading((prev) => !prev);
      emailNotify('Email send Successfully');
      console.log({ EmailResult, EmailStatus });
    } catch (error) {
      emailNotify('Something went wrong');
      setIsLoading((prev) => !prev);
    }
    setFormValue(formInitValue);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormInput
        type='text'
        id='name'
        name='name'
        placeholder='Please enter your name'
        value={name}
        onChange={HandleFormValue}
        required
      />
      <br />
      <FormInput
        type='email'
        id='email'
        name='email'
        placeholder='Please enter your email'
        value={email}
        onChange={HandleFormValue}
        required
      />
      <br />
      <FormInput
        isTextArea
        id='message'
        name='message'
        placeholder='Please enter your message'
        value={message}
        onChange={HandleFormValue}
        required
      />
      <br />
      <button type='submit'>{isLoading ? 'Loading...' : 'Send'}</button>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </form>
  );
};
