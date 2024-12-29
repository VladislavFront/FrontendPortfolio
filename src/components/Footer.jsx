import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Footer = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_jbzev27'
    const templateId = 'template_pei8v3z'
    const publickKey = 'jOaeTS9loYfguUrbb'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Vladislav_Front',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publickKey)
      .then((response) => {
        swal("Успешно!", "Сообщение успешно отправлено! Ожидайте, пока с Вами свяжуться, по указанному Вами адресу электронной почты! Если спустя 3 дня с Вами никто не связался - просьба повторить обращение", "success");
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => { 
        swal ( "Ошибка!",  "Произошла какая-то ошибка, пожалуйста, попробуйте еще раз!",  "error" )
      })
  }

  return (
    <footer className="footer" id="contact">
      <form onSubmit={handleSubmit} action="" className="form" id="contactForm">
        <div className="input-container">
          <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="input-container__input"/>
          <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required className="input-container__input"/>
        </div>
        <textarea  name="user_message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" id="" required className="form__textarea"></textarea>
        <button className="form__button" type="submit">Send Message</button>
      </form>
      <p className="policy">Отправляя свои данные, Вы соглашаетесь с <a href="https://vladislavfront.github.io/privacyPolicy/" className="policy__link">политикой конфиденциальности</a></p>
    </footer>
  )
}

export default Footer