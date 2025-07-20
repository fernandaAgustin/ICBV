import React, { useEffect } from 'react';
import './NuestraHistoria.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChurch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NuestraHistoria = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="nuestra-historia-page dark-mode">
            {/* Hero Video Header */}
            <section className="hero-historia">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src="https://res.cloudinary.com/dobxyacku/video/upload/v1752985709/video_nuestrahistoria_coduuo.mp4" type="video/mp4" />
                </video>
                <div className="hero-text text-center">
                    <h1 className="display-4 fw-bold">Iglesia Columna y Baluarte de la Verdad</h1>
                    <p className="lead">Una historia de fe, servicio y crecimiento</p>
                </div>
            </section>


            {/* Historia Sections */}
            <section className="contenido-section container py-5" data-aos="fade-up">
                {/* Inicios */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <img
                            src="https://i.pinimg.com/1200x/6d/05/ac/6d05ac025bc914ea310d594209af1e02.jpg"
                            alt="Inicios"
                            className="img-fluid rounded shadow historia-img"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Los Comienzos</h2>
                        <p>
                            Nuestra iglesia nació del deseo de una comunidad por compartir el evangelio y vivir conforme a la verdad de la Palabra.
                            En reuniones humildes, llenas de oración y esperanza, comenzó a formarse el cuerpo que hoy conocemos como
                            Iglesia Columna y Baluarte de la Verdad.
                        </p>
                    </div>
                </div>

                {/* Crecimiento */}
                <div className="row align-items-center mb-5 flex-md-row-reverse">
                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b"
                            alt="Crecimiento"
                            className="img-fluid rounded shadow historia-img"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Creciendo en Comunidad</h2>
                        <p>
                            A lo largo de los años, fuimos testigos de milagros, sanidades y transformación. Dios trajo obreros, líderes
                            y familias que sumaron visión y pasión. Los ministerios florecieron y el mensaje de Cristo alcanzó nuevas vidas.
                        </p>
                    </div>
                </div>

                {/* Presente y Futuro */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <img
                            src="https://i.pinimg.com/736x/97/52/f8/9752f81cbe9dce601f7372b3a69cd503.jpg"
                            alt="Presente y Futuro"
                            className="img-fluid rounded shadow historia-img"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Presente y Futuro</h2>
                        <p>
                            Hoy seguimos caminando con convicción. Nuestra meta no ha cambiado: predicar la verdad, servir con amor
                            y permanecer firmes en la fe. El futuro lo vemos con esperanza, sabiendo que Dios es quien edifica su iglesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Botón de regreso */}
            <div className="text-center mb-5">
                <button className="btn-back" onClick={() => navigate('/')}>
                    ← Regresar a Inicio
                </button>
            </div>

            {/* Footer */}
            <footer className="footer-enhanced text-center py-4">
                <div className="container">
                    <h5><FaChurch className="me-2" /> Iglesia Columna y Baluarte de la Verdad</h5>
                    <p className="small">© {new Date().getFullYear()} Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default NuestraHistoria;
