import React, { useState, useEffect } from 'react';
import './PaginaPrincipal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChurch, FaPrayingHands, FaBible, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../img/logo2.png';

const PaginaPrincipal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modoClaro, setModoClaro] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleModo = () => setModoClaro(!modoClaro);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={`pagina-principal ${modoClaro ? 'modo-claro' : 'modo-oscuro'}`}>
            {/* NAVBAR */}
            <nav className={`navbar navbar-expand-lg shadow-sm fixed-top ${modoClaro ? 'modo-claro-navbar' : 'modo-oscuro-navbar'}`}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            alt="Columna y Baluarte de la Verdad"
                            style={{ height: '50px', objectFit: 'contain' }}
                        />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-expanded={isOpen}>
                        <FaBars size={25} color="#888" />
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#historia"><FaChurch className="me-2" />Nuestra Historia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#nosotros"><FaBible className="me-2" />Sobre Nosotros</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-outline-light btn-sm" onClick={toggleModo}>
                        {modoClaro ? 'Modo Oscuro' : 'Modo Claro'}
                    </button>
                </div>
            </nav>

            {/* HERO */}
            <header className="hero-section d-flex align-items-center justify-content-center">
                <video autoPlay loop muted playsInline className="hero-video">
                    <source src="https://videocdn.cdnpk.net/videos/6872df75-27b9-544a-b02a-fe3b57a645f8/horizontal/previews/clear/large.mp4?token=exp=1745207664~hmac=f976905124b0eb38a95ef52a9100a5ebb7e459ac0bddc36ac8bf2d7fbc5731e1" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
                <div className="text-center hero-text" data-aos="fade-up">
                    <h1 className="display-3 fw-bold">Bienvenidos</h1>
                    <p className="lead">Iglesia fundamentada en la verdad de Cristo</p>
                    <Link to="/conocenos" className="btn btn-outline-light mt-3">Conócenos</Link>
                </div>
            </header>

            {/* CITA BÍBLICA */}
            <section className="biblical-quote-section">
                <div className="container text-center">
                    <div className="quote-box mx-auto">
                        <span className="quote-icon">“</span>
                        <p className="quote-text typewriter">
                            Para que si tardo, sepas cómo debes conducirte en la casa de Dios, que es la iglesia del Dios viviente, columna y baluarte de la verdad.
                        </p>
                        <footer className="quote-ref">1 Timoteo 3:15</footer>
                    </div>
                </div>
            </section>

            {/* MINISTERIOS */}
            <section id="ministerios" className="container py-5">
                <h2 className="text-center mb-5" data-aos="fade-down">Nuestros Ministerios</h2>
                <div className="row text-center">
                    {[{
                        titulo: "Niños",
                        texto: "Amor y enseñanza bíblica para los pequeños.",
                        img: "https://i.pinimg.com/736x/53/dc/b5/53dcb5bfc20cf310375187b53fd92de4.jpg"
                    }, {
                        titulo: "Jóvenes",
                        texto: "Pasión por la Palabra y propósito en Cristo.",
                        img: "https://i.pinimg.com/736x/8e/bc/aa/8ebcaae42ef89d1c027b4bdbcddafd30.jpg",
                        enlace: "/jovenes"
                    }, {
                        titulo: "Adultos",
                        texto: "Comunión, crecimiento y liderazgo espiritual.",
                        img: "https://i.pinimg.com/736x/f3/c1/ee/f3c1ee45c57a6cd1caae785835621c56.jpg"
                    }].map((m, i) => {
                        const isJovenes = m.titulo === "Jóvenes";

                        const cardContent = (
                            <div className="card mb-4 h-100 shadow-sm transition-card">
                                <img src={m.img} className="card-img-top ministry-img" alt={`Ministerio de ${m.titulo}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{m.titulo}</h5>
                                    <p className="card-text">{m.texto}</p>
                                </div>
                            </div>
                        );

                        return (
                            <div className="col-md-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                {isJovenes ? (
                                    <Link to={m.enlace} className="text-decoration-none">{cardContent}</Link>
                                ) : (
                                    cardContent
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ACTIVIDADES */}
            <section className="bg-dark py-5" id="actividades">
                <div className="container">
                    <h2 className="text-center mb-5" data-aos="fade-up">Actividades de Nuestra Iglesia</h2>
                    <div className="row text-center">
                        {[{
                            titulo: "Oración",
                            texto: "Intercesión congregacional y tiempos de intimidad con Dios.",
                            icono: <FaPrayingHands size={40} />
                        }, {
                            titulo: "Cultos",
                            texto: "Adoración, predicación y enseñanza basada en la Biblia.",
                            icono: <FaChurch size={40} />
                        }, {
                            titulo: "Doctrina Cristiana",
                            texto: "Estudio sistemático y sano de la Palabra de Dios.",
                            icono: <FaBible size={40} />
                        }].map((act, i) => (
                            <div className="col-md-4 mb-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="card h-100 shadow-sm p-4">
                                    <div className="mb-3">{act.icono}</div>
                                    <h5 className="card-title">{act.titulo}</h5>
                                    <p className="card-text">{act.texto}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="text-center py-4">
                <p className="mb-1">© 2025 Iglesia Cristiana Columna y Baluarte de la Verdad</p>
                <div className="social-icons">
                    <a href="#" className="mx-2"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="mx-2"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="mx-2"><i className="bi bi-envelope"></i></a>
                </div>
                <small>ICBV@correo.com</small>
            </footer>
        </div>
    );
};

export default PaginaPrincipal;
