import './Organograma.css';

function Organograma() {
  return (
    <>
<section className="organograma">
  <div className="container">
    <div className="organograma-header">
  <img src="../src/assets/img/geral/organograma.png" className="organograma-img" />
  <h1 className="titulo-h1">Organograma AECS Gigantes</h1>
</div>

    <div className="organograma-grid">
      <div className="cargo presidente">
        <h3>Presidente</h3>
        <p>Rodolfo Fernando Polidoro</p>
      </div>
      <div className="cargo vice">
        <h3>Vice-Presidente</h3>
        <p>Alexandre Vitor Giuriato</p>
      </div>
      <div className="cargo tesoureiro">
        <h3>Tesoureiro</h3>
        <p>Gabriel de Souza Simplício</p>
      </div>
      <div className="cargo secretario">
        <h3>Secretário</h3>
        <p>Thalys Jucá da Silva</p>
      </div>
      <div className="cargo diretor">
        <h3>Diretor Esportivo</h3>
        <p>Ana Paula Boito Ramkrapes</p>
      </div>
    </div>

    <h1 className="titulo-h1">Conselho Fiscal</h1>
    <div className="conselho-fiscal">
      <div className="cargo">
        <strong>1º Conselheiro:</strong>
        <p>Armando da Silva</p>
      </div>
      <div className="cargo">
        <strong>2º Conselheiro:</strong>
        <p>Adilson Ramos de Oliveira</p>
      </div>
      <div className="cargo">
        <strong>3º Conselheiro:</strong>
        <p>Paulo Costa de Souza</p>
      </div>
      <div className="cargo">
        <strong>1º Suplente:</strong>
        <p>Rafael Hoffman</p>
      </div>
      <div className="cargo">
        <strong>2º Suplente:</strong>
        <p>Pedro Henrique Vital Rosa</p>
      </div>
    </div>

    <div className="observacoes">
      <h3>Observações</h3>
      <p>
        <strong><u>A composição atual é válida de 13/11/2022 a 13/11/2026.</u></strong><br />
        • <strong>ART. 35º</strong> – Não é permitida a reeleição para mesmo cargo de Diretoria.<br />
        • <strong>ART. 36º</strong> – É vedada a formação de Diretoria com cônjuges e parentes consangüíneos ou afins até o 2° grau do Presidente ou dirigentes da entidade.<br />
        • <strong>ART. 37º</strong> - Os membros da Diretoria e Conselho Fiscal não receberão nenhum tipo de remuneração pelas atividades exercidas na Associação.<br />
        • <strong>ART. 17º</strong> Conselho Fiscal possui autonomia para fiscalizar e emitir parecer sobre as contas.
      </p>
    </div>
  </div>
</section>

    </>
  )
  
}

export default Organograma;
