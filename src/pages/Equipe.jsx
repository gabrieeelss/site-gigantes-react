import { useEffect, useState, useRef } from "react";
import './Equipe.css';
import CardAtleta from '../components/CardAtleta.jsx';
import CardProf from '../components/CardProf.jsx';

// Dados de exemplo (substitua pelos seus dados reais)
const atletasData = Array.from({ length: 10 }, (_, i) => ({ id: i, nome: `Atleta ${i + 1}` }));
const profissionaisData = Array.from({ length: 8 }, (_, i) => ({ id: i, nome: `Profissional ${i + 1}` }));

function Equipe() {
  const [indexAtletas, setIndexAtletas] = useState(0);
  const [indexProfissionais, setIndexProfissionais] = useState(0);
  const [cardsVisiveisAtletas, setCardsVisiveisAtletas] = useState(1);
  const [cardsVisiveisProf, setCardsVisiveisProf] = useState(1);

  const atletasTrackRef = useRef(null);
  const profTrackRef = useRef(null);

  // Função para calcular o número de cards visíveis na tela
  const calcularVisiveis = (trackRef, setCardsVisiveis) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const container = track.parentElement;
    if (!container) return;

    const cards = track.querySelectorAll(".card-equipe");
    if (cards.length === 0) return;

    const containerWidth = container.offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap) || 0;

    const count = Math.floor((containerWidth + gap) / (cardWidth + gap));
    setCardsVisiveis(count > 0 ? count : 1);
  };

  // Funções para atualizar o carrossel (transform)
  const updateCarousel = (trackRef, index, cardsVisiveis) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(".card-equipe");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap) || 0;
    
    // Calcula o `maxIndex` dinamicamente com base nos cards visíveis
    const maxIndex = Math.max(0, cards.length - cardsVisiveis);
    const validIndex = Math.min(Math.max(index, 0), maxIndex);

    track.style.transform = `translateX(-${validIndex * (cardWidth + gap)}px)`;
  };

  // Efeito para calcular cards visíveis ao carregar e redimensionar
  useEffect(() => {
    const handleResize = () => {
      calcularVisiveis(atletasTrackRef, setCardsVisiveisAtletas);
      calcularVisiveis(profTrackRef, setCardsVisiveisProf);
    };

    handleResize(); // Roda na montagem
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Efeitos para atualizar o `transform`
  useEffect(() => {
    updateCarousel(atletasTrackRef, indexAtletas, cardsVisiveisAtletas);
  }, [indexAtletas, cardsVisiveisAtletas]);

  useEffect(() => {
    updateCarousel(profTrackRef, indexProfissionais, cardsVisiveisProf);
  }, [indexProfissionais, cardsVisiveisProf]);

  // Efeito para o auto-slide
  useEffect(() => {
    const intervalAtletas = setInterval(() => {
      setIndexAtletas(prev => {
        const track = atletasTrackRef.current;
        if (!track) return prev;
        const cards = track.querySelectorAll(".card-equipe");
        const maxIndex = Math.max(0, cards.length - cardsVisiveisAtletas);
        return prev < maxIndex ? prev + 1 : 0;
      });
    }, 2500);

    const intervalProf = setInterval(() => {
      setIndexProfissionais(prev => {
        const track = profTrackRef.current;
        if (!track) return prev;
        const cards = track.querySelectorAll(".card-equipe");
        const maxIndex = Math.max(0, cards.length - cardsVisiveisProf);
        return prev < maxIndex ? prev + 1 : 0;
      });
    }, 3500);

    return () => {
      clearInterval(intervalAtletas);
      clearInterval(intervalProf);
    };
  }, [cardsVisiveisAtletas, cardsVisiveisProf]);

  // Handlers para botões
  const handlePrev = (setIndex) => setIndex(prev => Math.max(0, prev - 1));

  const handleNext = (setIndex, trackRef, cardsVisiveis) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(".card-equipe");
    const maxIndex = Math.max(0, cards.length - cardsVisiveis);
    setIndex(prev => Math.min(prev + 1, maxIndex));
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
        <div className="carousel-wrapper-equipe">
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
              <CardAtleta imagem="./img/equipe/giuriato.png" nome="Alexandre Giuriato" classificacao="3.0" atletadesde="2008" instagram="#" />
              <CardAtleta imagem="./img/equipe/gabriel.png" nome="Gabriel Simplício" classificacao="0.5" atletadesde="2014" instagram= "https://www.instagram.com/gabrielsimplici0/" />
              <CardAtleta imagem="./img/equipe/adilson.png" nome="Adilson Ramos" classificacao="2.0" atletadesde="2010" instagram= "https://www.instagram.com/adilson.ramos41/" />
              <CardAtleta imagem="./img/equipe/armando.png" nome="Armando Silva" classificacao="0.5" atletadesde="2009" instagram= "https://www.instagram.com/soldadodecristo.rugbi/" />
              <CardAtleta imagem="./img/equipe/denis.png" nome="Denis Cairiac" classificacao="2.0" atletadesde="2010" instagram= "https://www.instagram.com/decairiac23/" />
              <CardAtleta imagem="./img/equipe/japa.png" nome="Alexandre Taniguchi" classificacao="2.5" atletadesde="2008" instagram= "https://www.instagram.com/alexandre_taniguchi/" />
              <CardAtleta imagem="./img/equipe/giuliano.png" nome="Giuliano Castro" classificacao="2.0" atletadesde="2022" instagram= "https://www.instagram.com/giulianocstro/" />
              <CardAtleta imagem="./img/equipe/leonardo.png" nome="Leonardo Pacca" classificacao="0.5" atletadesde="2023" instagram= "https://www.instagram.com/p.leeoo/" />
              <CardAtleta imagem="./img/equipe/paulo.jpg" nome="Paulo Costa" classificacao="1.0" atletadesde="2022" instagram= "https://www.instagram.com/paulocostade_souza/" />
              <CardAtleta imagem="./img/equipe/ruth.png" nome="Ruth Borges" classificacao="1.0F" atletadesde="2024" instagram= "https://www.instagram.com/_ruthinhaborges_/" />
              <CardAtleta imagem="./img/equipe/renata.jpg" nome="Renata Rubin" classificacao="---F" atletadesde="2025" instagram= "https://www.instagram.com/renata.rubin/" />
              <CardAtleta imagem="./img/equipe/rodolfo.png" nome="Rodolfo Polidoro" classificacao="2.5" atletadesde="2019" instagram= "https://www.instagram.com/rodolfo_polidoro20/" />
              <CardAtleta imagem="./img/equipe/thalys.png" nome="Thalys Jucá" classificacao="3.5" atletadesde="2022" instagram= "https://www.instagram.com/_thalys6/" />
              <CardAtleta imagem="./img/equipe/stuart.jpg" nome="Stuart Robinson" classificacao="3.5" atletadesde="2014" instagram= "https://www.instagram.com/leglessrobbo/" />
            
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
        <div className="carousel-wrapper-equipe">
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
              <CardProf nome="Ana Paula Boito Ramkrapes" imagem="./img/equipe/ana-paula.png" instagram="https://www.instagram.com/prof.anaramkrapes/" funcao="Técnica/Educadora Física" />
              <CardProf nome="Renan Matias" imagem="./img/equipe/renan.png" instagram="https://www.instagram.com/nan.metal/" funcao="Staff/Mecânico" />
              <CardProf nome="Edilene Nascimento" imagem="./img/equipe/edilene.png" instagram="https://www.instagram.com/dilynasc/" funcao="Enfermeira" />  
              <CardProf nome="Marta Prando Ramos" imagem="./img/equipe/marta.jpg" instagram="https://www.instagram.com/prandomarta/" funcao="Enfermeira" />
              <CardProf nome="Luísa Cançado Cavalieiri" imagem="./img/equipe/luisa.png" instagram="https://www.instagram.com/luluccavalieri/" funcao="Fisioterapeuta" />
              <CardProf nome="Giovana Barbosa" imagem="./img/equipe/giovana.png" instagram="https://www.instagram.com/gigi_oliveirab/" funcao="Fisioterapeuta" />
              <CardProf nome="Elison Vaz" imagem="./img/equipe/elison.png" instagram="https://www.instagram.com/elisom_vaz_/" funcao="Staff/Mecanico" />
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
