import React, { useState } from 'react';
import './css/wapp.css';
import $ from 'jquery';

function Wapp() {
  const [isWhatsAppVisible, setWhatsAppVisible] = useState(false);

  const toggleWhatsApp = () => {
    setWhatsAppVisible(!isWhatsAppVisible);
  };

  const closeWhatsApp = () => {
    setWhatsAppVisible(false);
  };

  const openWhatsApp = () => {
    // Agrega lógica adicional si es necesario antes de abrir WhatsApp
    // ...

    window.open('https://api.whatsapp.com/send?phone=525512003020', '_blank');
  };

  $(document).on("click", "#whatsapp-popup", function () {
    $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
    setTimeout(function () {
      $('.loading-animation').hide();
      $('.whatsapp-message-wrapper').css("display", "flex").hide().fadeIn("slow");
    }, 1000)
  });

  $(document).on("click", ".close_whatsapp", function () {
    $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
  });

  return (
    <>
          <style>
        {`
                  .button-hover:hover {
                      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                      transform: scale(1.02);
                      transition: all 0.2s ease-in-out;
                  }
                `}
      </style>
   
    <div>
      <div className="whatsapp-main ">
        <div type="floating" className={`whatsapp-wrapper ${isWhatsAppVisible ? 'show-whatsapp' : 'hide-whatsapp'}`} style={{ width: '360px' }}>
          <div className="whatsapp-header ">
            <div size="52" className="support-avatar">
              <div className="avatar-wrapper">
                <div className="avatar-img"></div>
              </div>
            </div>
            <div className="header-info">
              <div className="whatsapp-name"><b>VIVA LA VIDA</b></div>
              <div className="whatsapp-reply-time">
                Usually replies in a few minutes
              </div>
            </div>
          </div>
          <div className="whatsapp-background">
            <div className="whatsapp-message-container">
              <div className="loading-animation">
                <div className="dot-pulse"></div>
              </div>
              <div className="whatsapp-message-wrapper">
                <div className="chat-body-wrapper">
                  <div className="whatsapp-chat-name">VIVA LA VIDA</div>
                  <div className="whatsapp-chat-message">
                    <p>Hey there 👋</p>
                    <br />
                    <p>
                      I'm here to help, so let me know what's up and I'll be
                      happy to help you 😊
                    </p>
                  </div>
                  <div className="whatsapp-chat-time">20:49</div>
                </div>
              </div>
            </div>
          </div>
          <a role="button" href="#" title="WhatsApp" onClick={openWhatsApp} className="whatsapp-btn button-hover">
            <svg className="whatsapp-send-icon-small" xmlns="http://www.w3.org/2000/svg" version="1" height="20" viewBox="0 0 90 90">
              <path
                d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z"
                fill="#FFF" />
            </svg>
            <span className="chat-button-text ">Start Chat</span>
          </a>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
        </div>
        <div className="whatsapp-popup-button button-hover" id="whatsapp-popup" onClick={toggleWhatsApp}>
          <div className="whatsapp-notify"></div>
          <div className="whatsapp-button-main">
            <svg className="whatsapp-send-icon-big" xmlns="http://www.w3.org/2000/svg" version="1" width="32" height="32" viewBox="0 0 90 90">
              <path
                d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z"
                fill="#FFF" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Wapp;
