import React from "react";
import './Habilidades.css'

const Habilidades = () => {
    return (
        <div className="skills-container">
        <div className="skills-card">
            <h1 className="skills-title">Interfaz Sobre Habilidades</h1>
            <p className="skills-intro">
                Actualmente me encuentro aprendiendo más sobre el desarrollo web, 
                ya que es un campo en el que me siento muy cómodo y atraído. Estoy explorando y mejorando continuamente.
            </p>
            <ul className="skills-list">
                <li>
                    <img
                        src="https://cronuts.digital/wp-content/uploads/2024/02/dXy3DlVInZPkKv2r1T3dQdO2M4hbVhIKAf3BbOOk3D.png"
                        alt="Desarrollo Web"
                        className="skill-icon"
                    />
                    <span>Desarrollo web</span>
                </li>
                <li>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/919/919841.png"
                        alt="C#"
                        className="skill-icon"
                    />
                    <span>Experiencia con C# y proyectos realizados</span>
                </li>
                <li>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2748/2748381.png"
                        alt="Bases de Datos SQL"
                        className="skill-icon"
                    />
                    <span>Conocimiento en bases de datos SQL</span>
                </li>
                <li>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                        alt="MongoDB"
                        className="skill-icon"
                    />
                    <span>Introducción a MongoDB</span>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Habilidades