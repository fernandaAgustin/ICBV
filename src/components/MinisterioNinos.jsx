import React, { useEffect } from 'react';
import './MinisterioNinos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { FaChild, FaChalkboardTeacher, FaBookOpen, FaSmile } from 'react-icons/fa';

const MinisterioNinos = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="ministerio-ninos-page dark-mode">
            {/* HERO */}
            <section className="hero-ninos d-flex align-items-center justify-content-center text-center">
                <div className="overlay">
                    <h1 className="display-5 fw-bold">Ministerio de Niños</h1>
                    <p className="lead">Formando corazones con la Palabra de Dios</p>
                </div>
            </section>


            {/* INTRO */}
            <section className="container py-5" data-aos="fade-up">
                <h2 className="text-center mb-4">Un espacio pensado para los más pequeños</h2>
                <p className="text-center mb-5">
                    Mientras los adultos reciben la prédica dominical, nuestros niños participan en clases bíblicas especialmente diseñadas según su edad.
                    Nuestro objetivo es guiarlos en amor, verdad y gozo, sembrando en ellos el conocimiento de Dios desde temprana edad.
                </p>

                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <FaChild className="icon-ninos mb-3" size={40} />
                        <h5>Clases por edades</h5>
                        <p>Grupos divididos para ofrecer enseñanzas relevantes y adaptadas a su etapa de crecimiento.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <FaChalkboardTeacher className="icon-ninos mb-3" size={40} />
                        <h5>Maestros capacitados</h5>
                        <p>Un equipo apasionado y preparado guía a los niños en un entorno seguro y dinámico.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <FaBookOpen className="icon-ninos mb-3" size={40} />
                        <h5>Fundamento bíblico</h5>
                        <p>La Palabra de Dios es el centro de cada enseñanza, dinámica y actividad que realizamos.</p>
                    </div>
                </div>
            </section>

            {/* ESCUELITA BÍBLICA DE VACACIONES */}
            <section className="container py-5" data-aos="fade-up">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4">
                        <img
                            src="https://i.pinimg.com/736x/9c/3f/56/9c3f56f328c00c872e5eebaa64f4dec6.jpg"
                            alt="Escuelita Bíblica"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6">
                        <h3 className="mb-3">Escuelita Bíblica de Vacaciones</h3>
                        <p>
                            Cada temporada de vacaciones organizamos una Escuelita Bíblica con una temática especial:
                            aventuras, superhéroes bíblicos, viajes en el tiempo y más. A través de juegos, talleres, manualidades
                            y tiempos de adoración, los niños aprenden los principios de la Palabra de una forma inolvidable.
                        </p>
                        <p>
                            Nuestro deseo es que cada niño descubra el amor de Dios de manera alegre, segura y creativa.
                        </p>
                        <FaSmile className="icon-ninos mt-3" size={40} />
                    </div>
                </div>
            </section>

            {/* BOTÓN VOLVER */}
            <div className="text-center mb-5">
                <button className="btn-back" onClick={() => navigate('/')}>
                    ← Regresar a Inicio
                </button>
            </div>
            <section className="biblical-verse" data-aos="zoom-in">
                "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él."
                <strong>Proverbios 22:6 (RVR1960)</strong>
            </section>

            {/* FOOTER */}
            <footer className="footer-enhanced text-center py-4">
                <div className="container">
                    <h5>Iglesia Columna y Baluarte de la Verdad</h5>
                    <p className="small">© {new Date().getFullYear()} Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default MinisterioNinos;
