import React from 'react';
import './IglesiaInfo.css';
import { FaClock, FaBible, FaCross } from 'react-icons/fa';

const IglesiaInfo = () => {
    return (
        <div className="info-general-page">

            {/* HERO */}
            <section className="hero-info d-flex align-items-center justify-content-center text-center">
                <div className="overlay-hero">
                    <img
                        src="https://images.unsplash.com/photo-1527970417224-dfd742ae6882"
                        alt="Reuniones"
                        className="hero-background-img"
                    />
                    <div className="text-container">
                        <h1 className="display-4 fw-bold">Reuniones y Horarios</h1>
                        <p className="lead">Descubre cuándo y cómo nos reunimos como iglesia</p>
                    </div>
                </div>
            </section>

            {/* REUNIONES */}
            <section className="container py-5" data-aos="fade-up">
                <h2 className="section-title mb-4 text-center">Nuestros Tiempos de Reunión</h2>
                <div className="row g-4">
                    {[
                        {
                            dia: "Domingo - Culto General",
                            hora: "Domingo, 11:00 AM",
                            descripcion: "Un tiempo de alabanza congregacional, enseñanza bíblica y comunión.",
                            icono: <FaClock />
                        },
                        {
                            dia: "Domingo - Discipulado",
                            hora: "Domingo, 10:00 AM",
                            descripcion: "Clase para nuevos creyentes y fundamentos de la fe cristiana.",
                            icono: <FaCross />
                        },
                        {
                            dia: "Jueves - Estudio Bíblico",
                            hora: "Jueves, 7:00 PM",
                            descripcion: "Estudio profundo de la Palabra de Dios y oración.",
                            icono: <FaBible />
                        },
                        {
                            dia: "Sábado - Instituto Bíblico",
                            hora: "Sábado, 9:00 AM",
                            descripcion: "Formación ministerial y preparación teológica.",
                            icono: <FaBible />
                        }
                    ].map((item, idx) => (
                        <div className="col-md-6" key={idx}>
                            <div className="info-card h-100 shadow-sm">
                                <div className="icon-circle">{item.icono}</div>
                                <h5 className="mb-1">{item.dia}</h5>
                                <p className="hora">{item.hora}</p>
                                <p>{item.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ALABANZA Y PREDICACIÓN */}
            <section className="worship-section py-5" data-aos="fade-up">
                <div className="container text-center">
                    <h2 className="mb-4">🎶 Alabanza & Predicación</h2>
                    <p className="lead">
                        Nuestra alabanza es viva, espiritual y centrada en Dios, combinando lo contemporáneo con lo profundo. Cada canción busca llevarnos a una adoración genuina y preparar el corazón para la Palabra.
                    </p>
                    <p>
                        La predicación es expositiva, bíblica y centrada en Cristo. Enseñamos la verdad de la Biblia (Reina-Valera 1960) con claridad, buscando transformar vidas por medio del Evangelio.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1495653797063-114787b77b23"
                        alt="Alabanza"
                        className="img-fluid rounded worship-img mt-4"
                    />
                </div>
            </section>

            {/* DOCTRINA */}
            <section className="doctrina-section container py-5" data-aos="fade-up">
                <h2 className="text-center mb-4">📖 En Qué Creemos</h2>
                <div className="doctrina-items">
                    {[
                        {
                            titulo: "La Biblia",
                            texto: "Creemos que la Biblia es la Palabra de Dios, inspirada y sin error, nuestra autoridad máxima (2 Timoteo 3:16)."
                        },
                        {
                            titulo: "Salvación por Gracia",
                            texto: "La salvación es un regalo de Dios, recibido por fe en Jesucristo (Efesios 2:8-9)."
                        },
                        {
                            titulo: "Bautismo",
                            texto: "Practicamos el bautismo en agua como testimonio de fe, obedeciendo el mandato de Jesús (Mateo 28:19)."
                        },
                        {
                            titulo: "Jesucristo",
                            texto: "Jesucristo es el Hijo de Dios, nuestro Salvador, quien murió y resucitó por nuestros pecados (Juan 3:16)."
                        }
                    ].map((item, i) => (
                        <div key={i} className="doctrina-card shadow-sm">
                            <h5>{item.titulo}</h5>
                            <p>{item.texto}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* UBICACIÓN */}
            <section className="map-section container my-5" data-aos="fade-up">
                <h2 className="text-center mb-4">📍 ¿Dónde nos reunimos?</h2>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.google.com/maps?q=Lázaro+Cárdenas+44,+San+Pedro+Tultepec,+52030,+México&output=embed"
                        allowFullScreen
                        loading="lazy"
                        title="Ubicación Iglesia"
                    ></iframe>
                </div>
                <p className="text-center mt-3">
                    Dirección: Calle Lázaro Cárdenas #44, San Pedro Tultepec, Estado de México, 52030
                </p>
            </section>

            {/* CITA BÍBLICA */}
            <section className="bible-verse-section py-5 text-center" data-aos="fade-up">
                <div className="container">
                    <blockquote className="blockquote">
                        <p className="mb-0">
                            "Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza."
                        </p>
                        <footer className="blockquote-footer mt-2">1 Timoteo 4:12 (RVR1960)</footer>
                    </blockquote>
                </div>
            </section>

            <button className="btn-back" onClick={() => window.location.href = '/'}>
                ← Regresar a Inicio
            </button>
        </div>
    );
};

export default IglesiaInfo;
