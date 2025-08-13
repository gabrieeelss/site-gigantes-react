import { useEffect } from 'react';
import './Titulos.css';

function Titulos() {

  useEffect(() => {
    fetch('/json/titulos.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('linha-do-tempo');
        if (!container) return;

        container.innerHTML = '';

        // Ordena do mais recente para o mais antigo
        data.sort((a, b) => b.ano - a.ano);

        data.forEach(entry => {
          const card = document.createElement('div');
          card.className = 'ano-card';

          const anoTitulo = document.createElement('h2');
          anoTitulo.textContent = entry.ano;
          card.appendChild(anoTitulo);

          entry.titulos.forEach(titulo => {
            const item = document.createElement('div');
            item.className = 'titulo-item';
            item.textContent = titulo;
            card.appendChild(item);
          });

          container.appendChild(card);
        });
      })
      .catch(err => console.error('Erro ao carregar os títulos:', err));
  }, []);

  return (
    <section className="titulos-index titulo-header">
      <img src="/img/titulos.png" className="titulo-img" alt="Títulos" />
      <h1 className="titulo-h1">Títulos Conquistados</h1>
      <div id="linha-do-tempo" className="linha-do-tempo"></div>
    </section>
  );
}

export default Titulos;
