import React, { useState } from 'react';
import { FaMapMarkerAlt, FaFacebookF, FaEnvelope, FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Conocenos.css';

const Conocenos = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`conocenos ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <section className="container py-5">
                {/* Encabezado con imagen grande */}
                <header className="hero-jovenes mb-5">
                    <div className="container">
                        <div className="hero-img-wrapper position-relative">
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipPau484tJu1feIrirkIRPn4LLEaXUNGcfQQydtD=w1200-h800-k-no"
                                alt="Iglesia"
                                className="hero-img img-fluid w-100"
                            />
                            <div className="hero-overlay text-center text-white">
                                <h1 className="fw-bold">Nuestros Datos</h1>
                                <p className="lead">"No dejando de congregarnos..."</p>
                                <button
                                    className="btn-mode-switch mt-3"
                                    onClick={() => setDarkMode(!darkMode)}
                                >
                                    {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>


                {/* Mapa más pequeño */}
                <div className="map-container mb-5 text-center">
                    <h3 className="mb-4">Ubicación</h3>
                    <div className="map-wrapper-sm mx-auto shadow rounded">
                        <iframe
                            src="https://www.google.com/maps?q=Lázaro+Cárdenas+44,+San+Pedro+Tultepec,+52030,+México&output=embed"
                            allowFullScreen
                            loading="lazy"
                            title="Ubicación Iglesia"
                        ></iframe>
                    </div>
                </div>

                {/* Horarios */}
                <div className="horarios-container text-center mb-5">
                    <h3 className="mb-4">Horarios</h3>
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="horario-box">
                                <h5>Culto Jueves</h5>
                                <p>6:00 PM - 8:00 PM</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="horario-box">
                                <h5>Culto Domingo</h5>
                                <p>11:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="horario-box">
                                <h5>Clases</h5>
                                <p>10:00 AM - 11:00 AM</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="horario-box">
                                <h5>Instituto Bíblico</h5>
                                <p>9:00 AM - 12:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botones */}
                <div className="text-center mb-4">
                    <a href="/" className="btn-back me-3">
                        <FaArrowLeft className="me-2" /> Regresar
                    </a>
                    <a href="mailto:jovenesICBV@gmail.com" className="btn-contact">
                        <FaEnvelope className="me-2" /> Enviar Correo
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-enhanced text-white py-4 mt-5">
                <div className="container text-center">
                    <h5><FaMapMarkerAlt className="me-2" /> Visítanos</h5>
                    <p>Lázaro Cárdenas 44, San Pedro Tultepec, 52030 Méx.</p>
                    <div className="social-icons mt-3">
                        <a href="https://www.facebook.com/tuPaginaAqui" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <FaFacebookF size={24} />
                        </a>
                    </div>
                    <small>© {new Date().getFullYear()} Ministerio ICBV Jóvenes. Todos los derechos reservados.</small>
                </div>
            </footer>
        </div>
    );
};

export default Conocenos;
