import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validation, setValidation] = useState({
    name: null,
    email: null,
    message: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpiar mensajes de validación al cambiar los valores
    setValidation({
      ...validation,
      [name]: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    const newValidation = {
      name: formData.name ? 'is-valid' : 'is-invalid',
      email: isValidEmail(formData.email) ? 'is-valid' : 'is-invalid',
      message: formData.message ? 'is-valid' : 'is-invalid',
    };

    setValidation(newValidation);

    // Verificar si hay algún campo inválido
    if (Object.values(newValidation).includes('is-invalid')) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    // Aquí puedes enviar los datos a tu servidor o realizar otras acciones necesarias
    console.log('Datos enviados:', formData);

    // Reiniciar el formulario
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Reiniciar la validación
    setValidation({
      name: null,
      email: null,
      message: null,
    });
  };

  const isValidEmail = (email) => {
    // Validación básica de dirección de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

      <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: 'auto' }}>
        <div className="row mb-3">
          <div className={`form-group col-md-6 ${validation.name}`}>
            <label htmlFor="name" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className={`form-group col-md-6 ${validation.email}`}>
            <label htmlFor="email" className="form-label">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Ingrese su correo electrónico"
            />
          </div>
        </div>
        <div className={`form-group mb-3 ${validation.message}`} >
          <label htmlFor="message" className="form-label">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingrese su mensaje"
            style={{ height: '120px' }}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary button-hover">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
