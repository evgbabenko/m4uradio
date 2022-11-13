import React, { useRef } from 'react';
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gkiwpvz', 'template_pla10qp', form.current, 'p84uLNQjr2jAArLBi');
        e.target.reset();
    }


    return (
        <section id='contact'>
            <h5>Залишаємось на зв'язку</h5>
            <h2>Зв'язок з нами!</h2>
            <div className="contact-form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" id="mane" placeholder="Твоє ім'я тут" required />
                    <input type="email" name='email' id='email' placeholder='Твій Email тут' required />
                    <textarea name="message" id="message" rows="7" placeholder="Твоє повідомлення тут" required></textarea>
                    <button type='submit' className="btn btn-primary">Відправити</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;