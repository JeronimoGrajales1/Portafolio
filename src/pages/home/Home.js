import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <div className="icon-container">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/013/165/111/non_2x/portrait-man-character-cartoon-faceless-line-and-fill-style-icon-free-vector.jpg" 
                        alt="icono" 
                        className="circle-icon" 
                    />
                    <h3>Jerónimo Grajales</h3>
                </div>
                <nav className="nav-container">
                    <ul className="barra-lista">
                        <li><a href="/descripcion">Sobre mí</a></li>
                        <li><a href="/habilidades">Habilidades</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </nav>
    
            </header>

            <div className="header-image">
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/008/572/964/non_2x/young-man-pointing-fingers-away-cartoon-character-flat-illustration-isolated-on-white-background-free-vector.jpg" 
                    alt="Imagen principal" 
                    className="header-img" 
                />
            </div>

            <div className="welcome-container">
                    <h1 className="welcome-text">Bienvenidos</h1>
                    <h1 className="welcome-text">a</h1>
                    <h1 className="welcome-text">mi</h1>
                    <h1 className="welcome-text">proyecto</h1>
            </div>
        
        </div>

    );
};

export default Home;