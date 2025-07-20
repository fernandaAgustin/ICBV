import React, { useState, useEffect } from 'react';
import './MinisterioJovenes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaMapMarkerAlt, FaEnvelope, FaClock, FaChurch, FaSun, FaMoon } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import fogataImg from '../img/fogata.jpeg';
import CampoImg from '../img/campo.jpeg';
import Imagen1 from '../img/FCampamento.jpeg';
import Imagen2 from '../img/campamento.jpeg';

const MinisterioJovenes = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentFlayer, setCurrentFlayer] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const activities = [
        {
            date: new Date(2025, 2, 29),
            title: "Fogatas",
            description: "Nos reunimos alrededor del fuego para compartir historias...",
            flayer: fogataImg,
        },
        {
            date: new Date(2025, 3, 5),
            title: "Día de campo",
            description: "Diversión al aire libre con juegos y comida.",
            flayer: CampoImg,
        },
        {
            date: new Date(2025, 4, 3),
            title: "Campamento",
            description: "Un fin de semana de retiro espiritual...",
            flayer: "https://via.placeholder.com/500x300?text=Campamento+Flayer",
        },
    ];

    return (
        <div className={`ministerio-jovenes ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <header className="hero-jovenes d-flex align-items-center justify-content-center">
                <video autoPlay muted loop playsInline className="hero-video">
                    <source src="https://res.cloudinary.com/dobxyacku/video/upload/v1752983395/VIDEO_JOVENES_xhap3f.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay text-center" data-aos="fade-up">
                    <h1 className="display-4 fw-bold">Ministerio de Jóvenes</h1>
                    <p className="lead">Pasión, propósito y poder en Cristo</p>
                    <button className="btn-switch" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                    </button>
                </div>
            </header>

            {/* Calendario */}
            <section className="calendar-section container mt-5" data-aos="fade-up">
                <h2 className="text-center mb-4">Calendario de Actividades</h2>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-secondary mb-3" onClick={() => setShowSidebar(!showSidebar)}>
                        {showSidebar ? 'Ocultar Calendario' : 'Mostrar Calendario'}
                    </button>
                </div>
                {showSidebar && (
                    <div className="d-flex justify-content-center calendar-wrapper">
                        <Calendar
                            onClickDay={(date) => {
                                const event = activities.find(act => act.date.toDateString() === date.toDateString());
                                if (event) {
                                    setCurrentFlayer(event.flayer);
                                    setShowModal(true);
                                }
                                setSelectedDate(date);
                            }}
                            tileClassName={({ date }) => {
                                const eventIndex = activities.findIndex(act => act.date.toDateString() === date.toDateString());
                                if (eventIndex !== -1) {
                                    return `activity-day color-${eventIndex + 1}`;
                                }
                            }}
                        />
                    </div>
                )}
            </section>

            {/* Modal */}
            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <button className="btn-close" onClick={() => setShowModal(false)}>&times;</button>
                        <img src={currentFlayer} alt="Flayer de Actividad" className="img-fluid" />
                    </div>
                </div>
            )}

            {/* Instagram */}
            <div className="instagram-link text-center mt-4">
                <a href="https://www.instagram.com/radicals4_christ/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} /> Síguenos en Instagram
                </a>
            </div>

            {/* Carrusel */}
            <section className="carousel-section mt-5">
                <div className="container">
                    <h2 className="text-center mb-4" data-aos="fade-up">Galería de Actividades</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Imagen1} alt="Actividad 1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <video className="d-block w-100" controls>
                                <source src="https://videocdn.cdnpk.net/videos/eb18a687-a5a9-4ece-91e8-fd63a5d6dc2a/horizontal/previews/clear/large.mp4?token=exp=1745188737~hmac=49f686f960850657276b266112019db898a1237dadfb8d4795ff932850f6b429" type="video/mp4" />
                            </video>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Imagen2} alt="Actividad 2" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

            {/* Testimonios */}
            <section className="testimonios-section py-5 text-center" data-aos="fade-up">
                <div className="container">
                    <h2 className="mb-4">Testimonios</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <blockquote className="blockquote">
                                <p>"Aquí encontré amor, comunidad y crecimiento espiritual."</p>
                                <footer className="blockquote-footer">Carlos, 22 años</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="blockquote">
                                <p>"Cada encuentro me llena de paz y dirección."</p>
                                <footer className="blockquote-footer">Ana, 19 años</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="blockquote">
                                <p>"Más que un grupo, somos una familia en Cristo."</p>
                                <footer className="blockquote-footer">Luis, 24 años</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section className="map-section container my-5" data-aos="fade-up">
                <h2 className="text-center mb-4">¿Dónde nos reunimos?</h2>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.google.com/maps?q=Lázaro+Cárdenas+44,+San+Pedro+Tultepec,+52030,+México&output=embed"
                        allowFullScreen
                        loading="lazy"
                        title="Ubicación Iglesia"
                    ></iframe>
                </div>
            </section>

            {/* Cita Bíblica */}
            <section className="bible-verse-section py-5 text-center" data-aos="fade-up">
                <div className="container">
                    <blockquote className="blockquote">
                        <p className="mb-0">"Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza."</p>
                        <footer className="blockquote-footer mt-2">1 Timoteo 4:12</footer>
                    </blockquote>
                </div>
            </section>

            {/* Botón regreso */}
            <button className="btn-back" onClick={() => window.location.href = '/'}>← Regresar</button>

            {/* Footer */}
            <footer className="footer-enhanced text-white mt-5 pt-4">
                <div className="container text-center">
                    <h5><FaChurch className="me-2" /> Ministerio de Jóvenes</h5>
                    <p><FaClock className="me-2" /> Sábados 6:00 PM</p>
                    <p><FaMapMarkerAlt className="me-2" /> Lázaro Cárdenas 44, San Pedro Tultepec, 52030 San Pedro Tultepec, Méx.</p>
                    <p><FaEnvelope className="me-2" /> jovenesICBV@gmail.com</p>
                    <div className="social-icons my-3">
                        <a href="https://www.instagram.com/radicals4_christ/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                    <small>© {new Date().getFullYear()} Todos los derechos reservados.</small>
                </div>
            </footer>
        </div>
    );
};

export default MinisterioJovenes;
