import React from "react";
import './Contacto.css'

const Contacto = () => {
    return (
        <div className="contact-container">
        <div className="contact-card">
            <h1 className="contact-title">Conéctate conmigo</h1>
            <p className="contact-description">Aquí encontrarás los enlaces para ponerte en contacto conmigo en las redes sociales o por correo electrónico.</p>
            <div className="social-icons">
                <a href="https://www.instagram.com/26_jgg/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
                </a>
                <a href="mailto:jeronimograjales166@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="Gmail" className="social-icon" />
                </a>
            </div>
        </div>
    </div>
    )
}

export default Contacto