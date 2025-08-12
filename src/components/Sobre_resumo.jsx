import { useState, useEffect } from 'react';
import './Sobre_resumo.css';

// Função auxiliar para converter "DD/MM/AAAA" para formato Date
const converterDataBRparaISO = (dataBR) => {
  if (!dataBR.includes('/')) return new Date(dataBR);
  const [dia, mes, ano] = dataBR.split('/');
  return new Date(`${ano}-${mes}-${dia}`);
};

function Sobre_resumo() {
  const [ultimasNoticias, setUltimasNoticias] = useState([]);

  useEffect(() => {
    fetch('./json/noticias.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o arquivo de notícias.');
        }
        return response.json();
      })
      .then(noticias => {
        // Ordena as notícias da mais recente para a mais antiga
        noticias.sort((a, b) => {
          const dataA = converterDataBRparaISO(a.data);
          const dataB = converterDataBRparaISO(b.data);
          return dataB - dataA;
        });

        // Pega as 3 mais recentes e atualiza o estado
        setUltimasNoticias(noticias.slice(0, 3));
      })
      .catch(error => console.error('Erro ao carregar notícias:', error));
  }, []); // O array vazio [] garante que o efeito só rode uma vez, na montagem do componente.

  return (
    <>
      <section className="resumo">
        <div className="container">
          <h2>Quem somos</h2>
          <p>A AECS Gigantes é uma entidade sem fins lucrativos dedicada ao desenvolvimento do Rugby em Cadeira de Rodas, promovendo inclusão e superação através do esporte.</p>
          <a href="sobre.html" className="btn-link">Saiba mais</a>
        </div>
      </section>

      <section className="noticias-index">
        <div className="container">
          <h2>Últimas Notícias</h2>
          <ul id="ultimas-noticias">
            {/* Renderiza as notícias a partir do estado, usando o método map */}
            {ultimasNoticias.length > 0 ? (
              ultimasNoticias.map((noticia, index) => (
                <li key={index}>
                  <strong>{noticia.data}:</strong> {noticia.titulo}
                </li>
              ))
            ) : (
              <li>Carregando notícias...</li>
            )}
          </ul>
          <a href="noticias.html" className="btn-link">Ver todas as notícias</a>
        </div>
      </section>

      <section className="galeria">
        <div className="container">
          <h2>Nosso Instagram</h2>
          <div className="instagram-widget">
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div className="elfsight-app-74a47237-bea1-4c6d-b4bb-aad2fb3fa59c" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      <section className="participe">
        <div className="container">
          <h2>Quer fazer parte?</h2>
          <p>Seja atleta, voluntário ou apoiador — sua participação é essencial para continuarmos crescendo e transformando vidas!</p>
          <a href="contato.html" className="btn-cta">Entre em contato</a>
        </div>
      </section>
    </>
  );
}

export default Sobre_resumo;