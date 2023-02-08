import React from 'react';
import ContactForm from './contact-form';
import './contact.css'
import $ from 'jquery'
import { Link } from "react-router-dom";

function Contact() {
  $(() => {
    $(window).scrollTop(0);
  })
  return (
    <section className='contact-container'>
      <div className="contact-info">
        <div className='djinfo'>Привіт Друже! <br />
          Якщо хочеш долучитися до єфіру, наразі ми приймаємо мікси на постійній основі. Якщо хочеш стати резидентом радіо, напиши нам про себе, скажи кількість слотів на місяць, обири зручний час у <Link className='underline' to='/shows'>розкладі</Link>, надішли демо-мікс. Після прослуховування ми включемо тебе до єфіру.<br />
          Зараз ми розробляємо систему живого виступу для кожного Діджея.<br />
          В тебе буде можливість проводити живий виступ з твого дому або студії!
        </div>
        <div className='donation-text'>
          <p>Нам потрібна твоя допомога для подальшого розвитку, покращення сервісів. </p>
          <p>Як ти знаєш, Інтернет радіо - це сукупність декалькох серверів, які потрібно орендувати та обслуговувати. Тому ми звертаємось до тебе, допомогти нашому проєкту.</p>
          <ul>
            <li className='donat-item'>USDT TETHER (TRC20): <span className='text-red'>TYmDTyorm8gtZRYdsitWD3aUECtLpeiJkt</span></li>
            <li className='donat-item'>Донат карткою через WayForPay:
              <button type="button" className="btn btn-primary btn-donation" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Dotane
              </button>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel"></h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                    </div>
                    <div className="modal-body">
                      <iframe allow="payment" id='donation-frame' className='modal-frame' src='https://secure.wayforpay.com/donate/db5065d3756d4' />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='donat-item'>PayPal: <span className='text-red'>m4uradioua@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact