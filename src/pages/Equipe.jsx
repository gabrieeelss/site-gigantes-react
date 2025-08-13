import { useEffect, useState, useRef } from "react";
import './Equipe.css';

function Equipe() {
  const [indexAtletas, setIndexAtletas] = useState(0);
  const [indexProfissionais, setIndexProfissionais] = useState(0);

  const atletasTrackRef = useRef(null);
  const profTrackRef = useRef(null);

  // Estado para quantidade visível (cards por vez)
  const [visibleAtletas, setVisibleAtletas] = useState(3);
  const [visibleProf, setVisibleProf] = useState(3);

  // Função para atualizar o número de cards visíveis com base no tamanho da viewport
  const calcularVisiveis = (containerRef, setVisible) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const card = containerRef.current.querySelector(".card");
    if (!card) return;
    const style = getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseFloat(style.marginRight);
    const count = Math.floor(containerWidth / cardWidth);
    setVisible(count > 0 ? count : 1);
  };

  // Atualiza o carrossel (transform) com base no index e visible
  const updateCarousel = (trackRef, index, visible) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(".card");
    if (cards.length === 0) return;

    const cardStyle = getComputedStyle(cards[0]);
    const marginRight = parseFloat(cardStyle.marginRight) || 20;
    const cardWidth = cards[0].offsetWidth + marginRight;
    const maxIndex = cards.length - visible;
    const validIndex = Math.min(Math.max(index, 0), maxIndex >= 0 ? maxIndex : 0);

    track.style.transform = `translateX(-${validIndex * cardWidth}px)`;
  };

  // Atualiza visible cards ao carregar e quando janela redimensionar
  useEffect(() => {
    const handleResize = () => {
      calcularVisiveis(atletasTrackRef, setVisibleAtletas);
      calcularVisiveis(profTrackRef, setVisibleProf);
    };

    handleResize(); // roda na montagem

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide interval com base no visible dinâmico
  useEffect(() => {
    const intervalAtletas = setInterval(() => {
      const track = atletasTrackRef.current;
      if (!track) return;
      const cards = track.querySelectorAll(".card");
      const maxIndex = cards.length - visibleAtletas;
      setIndexAtletas(prev => (prev < maxIndex ? prev + 1 : 0));
    }, 2500);

    const intervalProf = setInterval(() => {
      const track = profTrackRef.current;
      if (!track) return;
      const cards = track.querySelectorAll(".card");
      const maxIndex = cards.length - visibleProf;
      setIndexProfissionais(prev => (prev < maxIndex ? prev + 1 : 0));
    }, 3500);

    return () => {
      clearInterval(intervalAtletas);
      clearInterval(intervalProf);
    };
  }, [visibleAtletas, visibleProf]);

  // Atualiza transform quando index ou visible mudam
  useEffect(() => {
    updateCarousel(atletasTrackRef, indexAtletas, visibleAtletas);
  }, [indexAtletas, visibleAtletas]);

  useEffect(() => {
    updateCarousel(profTrackRef, indexProfissionais, visibleProf);
  }, [indexProfissionais, visibleProf]);

  // Handlers para botões
  const handlePrev = (setIndex, index) => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = (setIndex, index, trackRef, visible) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(".card");
    const maxIndex = cards.length - visible;
    if (index < maxIndex) setIndex(index + 1);
  };

  return (
    <section className="equipe-section">
      <div className="container-equipe">
        <div className="titulo-header">
          <img src="./img/equipe.png" className="titulo-img" alt="Equipe" />
          <h1 className="titulo-h1">Nossa Equipe</h1>
        </div>

        {/* === CARROSSEL DE ATLETAS === */}
        <h2 className="subtitulo">Atletas</h2>
        <div className="carousel-wrapper">
          <button
            className="carousel-btn prev atletas"
            onClick={() => handlePrev(setIndexAtletas, indexAtletas)}
            aria-label="Anterior Atletas"
          >
            &#10094;
          </button>

          <div className="carousel-container">
            <div
              className="carousel-track atletas-track"
              ref={atletasTrackRef}
              style={{ transition: "transform 0.3s ease" }}
            >
              <div className="card">
                <img src="./img/equipe/giuriato.png" alt="Alexandre Giuriato" />
                <h2>Alexandre Giuriato</h2>
                <p><strong>Classificação:</strong> 3.0</p>
                <p><strong>Atleta Desde:</strong> 2008</p>
                <div className="social-icons">
                  <a href="#"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/gabriel.png" alt="Gabriel Simplicio" />
                <h2>Gabriel Simplicio</h2>
                <p><strong>Classificação:</strong> 0.5</p>
                <p><strong>Atleta Desde:</strong> 2014</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/gabrielsimplici0/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/adilson.png" alt="Adilson Ramos" />
                <h2>Adilson Ramos</h2>
                <p><strong>Classificação:</strong> 2.0</p>
                <p><strong>Atleta Desde:</strong> 2010</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/adilson.ramos41/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/armando.png" alt="Armando Silva" />
                <h2>Armando Silva</h2>
                <p><strong>Classificação:</strong> 0.5</p>
                <p><strong>Atleta Desde:</strong> 2009</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/soldadodecristo.rugbi/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/denis.png" alt="Denis Cairiac" />
                <h2>Denis Cairiac</h2>
                <p><strong>Classificação:</strong> 2.0</p>
                <p><strong>Atleta Desde:</strong> 2010</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/decairiac23/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/japa.png" alt="Alexandre Taniguchi" />
                <h2>Alexandre Taniguchi</h2>
                <p><strong>Classificação:</strong> 2.5</p>
                <p><strong>Atleta Desde:</strong> 2008</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/alexandre_taniguchi/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/giuliano.png" alt="Giuliano Castro" />
                <h2>Giuliano Castro</h2>
                <p><strong>Classificação:</strong> 2.0</p>
                <p><strong>Atleta Desde:</strong> 2022</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/giulianocstro/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/leonardo.png" alt="Leonardo Pacca" />
                <h2>Leonardo Pacca</h2>
                <p><strong>Classificação:</strong> 0.5</p>
                <p><strong>Atleta Desde:</strong> 2023</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/p.leeoo/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/paulo.jpg" alt="Paulo Costa" />
                <h2>Paulo Costa</h2>
                <p><strong>Classificação:</strong> 1.0</p>
                <p><strong>Atleta Desde:</strong> 2022</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/paulocostade_souza/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/ruth.png" alt="Ruth Borges" />
                <h2>Ruth Borges</h2>
                <p><strong>Classificação:</strong> 1.0(F)</p>
                <p><strong>Atleta Desde:</strong> 2024</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/_ruthinhaborges_/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/renata.jpg" alt="Renata Rubin" />
                <h2>Renata Rubin</h2>
                <p><strong>Classificação:</strong> ---(F)</p>
                <p><strong>Atleta Desde:</strong> 2025</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/renata.rubin/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/rodolfo.png" alt="Rodolfo Polidoro" />
                <h2>Rodolfo Polidoro</h2>
                <p><strong>Classificação:</strong> 2.5</p>
                <p><strong>Atleta Desde:</strong> 2019</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/rodolfo_polidoro20/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/thalys.png" alt="Thalys Jucá" />
                <h2>Thalys Jucá</h2>
                <p><strong>Classificação:</strong> 3.5</p>
                <p><strong>Atleta Desde:</strong> 2022</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/_thalys6/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-btn next atletas"
            onClick={() => handleNext(setIndexAtletas, indexAtletas, atletasTrackRef, 3)}
            aria-label="Próximo Atletas"
          >
            &#10095;
          </button>
        </div>

        {/* === CARROSSEL DE PROFISSIONAIS === */}
        <h2 className="subtitulo">Profissionais</h2>
        <div className="carousel-wrapper">
          <button
            className="carousel-btn prev prof"
            onClick={() => handlePrev(setIndexProfissionais, indexProfissionais)}
            aria-label="Anterior Profissionais"
          >
            &#10094;
          </button>

          <div className="carousel-container">
            <div
              className="carousel-track profissionais-track"
              ref={profTrackRef}
              style={{ transition: "transform 0.3s ease" }}
            >
              <div className="card">
                <img src="./img/equipe/ana-paula.png" alt="Ana Paula Boito Ramkrapes" />
                <h2>Ana Paula Boito Ramkrapes</h2>
                <p><strong>Função/Profissão:</strong> Técnica/Educadora Física</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/prof.anaramkrapes/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/renan.png" alt="Renan Matias" />
                <h2>Renan Matias</h2>
                <p><strong>Função/Profissão:</strong> Staff/Mecânico</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/nan.metal/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/edilene.png" alt="Edilene Nascimento" />
                <h2>Edilene Nascimento</h2>
                <p><strong>Profissão:</strong> Enfermeira</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/dilynasc/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/marta.jpg" alt="Marta Ramos" />
                <h2>Marta Prando Ramos</h2>
                <p><strong>Profissão:</strong> Enfermeira</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/prandomarta/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/luisa.png" alt="Luisa Cavalieri" />
                <h2>Luísa Cançado Cavalieiri</h2>
                <p><strong>Profissão:</strong> Fisioterapeuta</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/luluccavalieri/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/giovana.png" alt="Giovana Barbosa" />
                <h2>Giovana Barbosa</h2>
                <p><strong>Profissão:</strong> Fisioterapeuta</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/gigi_oliveirab/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>

              <div className="card">
                <img src="./img/equipe/elison.png" alt="Elison Vaz" />
                <h2>Elison Vaz</h2>
                <p><strong>Profissão:</strong> Staff/Mecanico</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/elisom_vaz_/"><img src="./img/Instagram_icon.png" alt="Instagram" /></a>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-btn next prof"
            onClick={() => handleNext(setIndexProfissionais, indexProfissionais, profTrackRef, 3)}
            aria-label="Próximo Profissionais"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Equipe;
