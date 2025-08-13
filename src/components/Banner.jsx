import { useState, useEffect, useRef } from 'react';
import './Banner.css';

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
              {/* Usa `ref` para referenciar o elemento */}
              <ul className="carousel-track" ref={trackRef}>
                <li className="carousel-slide" ref={el => slidesRef.current[0] = el}>
                  <img src="./src/assets/img/galeria/galeria1.jpg" alt="Foto 1" />
                </li>
                <li className="carousel-slide" ref={el => slidesRef.current[1] = el}>
                  <img src="./src/assets/img/galeria/galeria2.jpg" alt="Foto 2" />
                </li>
                {/* Repita este padrão para os outros slides */}
                <li className="carousel-slide" ref={el => slidesRef.current[2] = el}>
                  <img src="./src/assets/img/galeria/galeria3.jpg" alt="Foto 3" />
                </li>
                <li className="carousel-slide" ref={el => slidesRef.current[3] = el}>
                  <img src="./src/assets/img/galeria/galeria4.jpg" alt="Foto 4" />
                </li>
                <li className="carousel-slide" ref={el => slidesRef.current[4] = el}>
                  <img src="./src/assets/img/galeria/galeria5.jpg" alt="Foto 5" />
                </li>
                <li className="carousel-slide" ref={el => slidesRef.current[5] = el}>
                  <img src="./src/assets/img/galeria/galeria6.jpg" alt="Foto 6" />
                </li>
                <li className="carousel-slide" ref={el => slidesRef.current[6] = el}>
                  <img src="./src/assets/img/galeria/galeria7.jpg" alt="Foto 7" />
                </li>
                <li className="carousel-slide" ref={el => slidesRef.current[7] = el}>
                  <img src="./src/assets/img/galeria/galeria8.jpg" alt="Foto 8" />
                </li>
              </ul>
            </div>
            <button className="carousel-btn next" aria-label="Próxima" onClick={showNextSlide}>
              &#10095;
            </button>
          </div>

          <div className="hero-image-between">
            <img src="./src/assets/img/geral/mascote2.svg" alt="Imagem entre carrossel e texto" className="img-neon-svg" />
          </div>

          <div className="hero-text">
            <h1>#SomosGigantes</h1>
            <p>Rugby em cadeira de rodas: superação, inclusão e espírito de equipe</p>
            <a href="/Sobre" className="btn-cta">Conheça nossa história</a>
            <br />
            <br />
            <div className="social-icons">
              <a href="https://facebook.com/gigantesrugbycr" target="_blank" rel="noopener noreferrer">
                <img src="./src/assets/img/geral/Facebook_logo_(square).png" alt="Facebook" />
              </a>
              <a href="https://instagram.com/gigantes_rugby" target="_blank" rel="noopener noreferrer">
                <img src="./src/assets/img/geral/Instagram_icon.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;