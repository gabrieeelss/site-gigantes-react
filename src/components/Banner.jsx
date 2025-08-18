import { useState, useEffect, useRef } from 'react';
import './Banner.css';
import CarrosselHome from './CarrosselHome';

function Banner() {
  // Estado para controlar o slide atual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Referências para os elementos do DOM
  const trackRef = useRef(null);
  const slidesRef = useRef([]);

  // useEffect para a lógica do carrossel
  useEffect(() => {
    // Sai se o carrossel não estiver presente
    if (!trackRef.current) return;
    const slides = Array.from(trackRef.current.children);
    if (slides.length === 0) return;

    let slideWidth = slides[0].getBoundingClientRect().width;

    // Função para atualizar o carrossel
    const updateCarousel = () => {
      const offset = currentIndex * slideWidth;
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    };

    // Função para o avanço automático
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000);

    // Atualiza o carrossel quando o currentIndex muda
    updateCarousel();

    // Listener para o redimensionamento da janela
    const handleResize = () => {
      slideWidth = slides[0].getBoundingClientRect().width;
      updateCarousel();
    };
    window.addEventListener('resize', handleResize);

    // Função de limpeza do useEffect
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };

  }, [currentIndex]); // O useEffect roda novamente quando o currentIndex muda

  const showNextSlide = () => {
    const slidesLength = slidesRef.current.length;
    setCurrentIndex(prevIndex => (prevIndex + 1) % slidesLength);
  };

  const showPrevSlide = () => {
    const slidesLength = slidesRef.current.length;
    setCurrentIndex(prevIndex => (prevIndex - 1 + slidesLength) % slidesLength);
  };

  return (
    <>
      <section className="hero-carousel">
        <div className="hero-carousel-content">
          <div className="carousel-wrapper-home">
            <button className="carousel-btn prev" aria-label="Anterior" onClick={showPrevSlide}>
              &#10094;
            </button>
            <div className="carousel-track-container">
              {/* GALERIA DO CARROSSEL */}
              <ul className="carousel-track" ref={trackRef}>
                <CarrosselHome imagem="./img/galeria/galeria1.jpg" slidesRef={slidesRef} index={0} />
                <CarrosselHome imagem="./img/galeria/galeria2.jpg" slidesRef={slidesRef} index={1} />
                <CarrosselHome imagem="./img/galeria/galeria3.jpg" slidesRef={slidesRef} index={2} />
                <CarrosselHome imagem="./img/galeria/galeria4.jpg" slidesRef={slidesRef} index={3} />
                <CarrosselHome imagem="./img/galeria/galeria5.jpg" slidesRef={slidesRef} index={4} />
                <CarrosselHome imagem="./img/galeria/galeria6.jpg" slidesRef={slidesRef} index={5} />
                <CarrosselHome imagem="./img/galeria/galeria7.jpg" slidesRef={slidesRef} index={6} />
                <CarrosselHome imagem="./img/galeria/galeria8.jpg" slidesRef={slidesRef} index={7} />
              </ul>
            </div>
            <button className="carousel-btn next" aria-label="Próxima" onClick={showNextSlide}>
              &#10095;
            </button>
          </div>

          <div className="hero-image-between">
            <img src="./img/mascote2.svg" alt="Imagem entre carrossel e texto" className="img-neon-svg" />
          </div>

          <div className="hero-text">
            <h1>#SomosGigantes</h1>
            <p>Rugby em cadeira de rodas: superação, inclusão e espírito de equipe</p>
            <a href="/Sobre" className="btn-cta">Conheça nossa história</a>
            <br />
            <br />
            <div className="social-icons-banner">
              <a href="https://facebook.com/gigantesrugbycr" target="_blank" rel="noopener noreferrer">
                <img src="./img/Facebook_logo_(square).png" alt="Facebook" />
              </a>
              <a href="https://instagram.com/gigantes_rugby" target="_blank" rel="noopener noreferrer">
                <img src="./img/Instagram_icon.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;