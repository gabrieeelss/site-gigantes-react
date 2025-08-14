import { useEffect } from 'react';
import './PerguntasFrequentes.css';

function PerguntasFrequentes() {

  useEffect(() => {
    const perguntas = document.querySelectorAll(".faq-question");
    perguntas.forEach(pergunta => {
      pergunta.addEventListener("click", () => {
        const resposta = pergunta.nextElementSibling;
        if (!resposta) return;
        const visivel = resposta.style.display === "block";
        resposta.style.display = visivel ? "none" : "block";
      });
    });

    // Limpeza ao desmontar o componente
    return () => {
      perguntas.forEach(pergunta => {
        pergunta.replaceWith(pergunta.cloneNode(true)); // Remove event listeners
      });
    };
  }, []);
  
  return (
    <>
    <div className="faq-titulo">
      <div className="titulo-header">
        <img src="./img/perguntas-frequentes.png" className="titulo-img" />
      <h1 className="titulo-header-h1">Perguntas Frequentes</h1>
      </div>
    <p>Confira as dúvidas mais comuns sobre o nosso projeto</p>
    </div>

  <main className="container-faq">
    <div className="faq-item">
      <button className="faq-question">1- O que significa AECS GIGANTES?</button>
      <div className="faq-answer">Associação de Esportes, Cultura e Superação "Gigantes".</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">2- Quem é atendido pela AECS Gigantes?</button>
      <div className="faq-answer">Pessoas com deficiência física aptas para o Rugby em Cadeira de Rodas. A modalidade é mista, podendo ser praticada por mulheres e homens de diversas deficiências.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">3- Com qual a idade as pessoas podem ser atendidas pela AECS Gigantes?</button>
      <div className="faq-answer">A idade mínima é de 16 anos, com apresentação de laudo médico que ateste a aptidão para prática esportiva.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">4- Como é feita a inserção na associação na primeira vez que a pessoa participa da atividade?</button>
      <div className="faq-answer">Será feita uma avaliação do associado e este fará um trabalho de iniciação onde aprenderá o manejo da cadeira de rodas, controle de bola, entre outras atividades. Quando estiver apto, será inserido nas competições e demais atividades.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">5- O que é alto rendimento?</button>
      <div className="faq-answer">É quando o atleta é preparado fisicamente, taticamente e disciplinarmente para participar dos campeonatos de Rugby em Cadeira de Rodas que a associação disputa.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">6- Como funciona a política dos associados na AECS Gigantes?</button>
      <div className="faq-answer">Qualquer pessoa física ou jurídica poderá requerer integração ao quadro associativo da AECS Gigantes, conforme o Estatuto Social.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">7- Como posso ser um Parceiro Institucional da AECS Gigantes?</button>
      <div className="faq-answer">Empresas, Escolas, Clubes Esportivos e outras organizações podem ser parceiras, cedendo locais, contratando palestras, oferecendo produtos ou convidando para eventos de SIPAT.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">8- Onde são realizados os treinos da AECS Gigantes atualmente?</button>
      <div className="faq-answer">CEU Estação Cidadania – Cultura Thaís Fernanda Ribeiro. Endereço: Rua Demerval da S Pereira, s/nº – Vila Esperança, Campinas-SP.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">9- Quais os horários dos treinos da AECS Gigantes?</button>
      <div className="faq-answer">Terças das 09:00h às 12:00h, quintas das 18:00h às 20:00h e sábados das 09:00h às 12:00h (exceto por motivos de força maior-.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">10- Quais campeonatos a AECS Gigantes participa?</button>
      <div className="faq-answer">Campeonatos nacionais e estaduais organizados pela ABRC (Associação Brasileira de Rugby em Cadeira de Rodas- e por clubes.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">11- A AECS Gigantes por ser uma associação pode receber doações?</button>
      <div className="faq-answer">Sim, basta entrar em contato por e-mail: aecsgigantes@gmail.com.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">12- Podem participar da associação pessoas com deficiência de outras cidades que não sejam Campinas?</button>
      <div className="faq-answer">Sim, a associação está aberta para associados de todo o Brasil.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">13- Como posso entrar em contato para participar da associação?</button>
      <div className="faq-answer">Através do formulário na página <a   href="/Contato" style={{ fontWeight: 'bold', color: 'blue' }}>  CONTATO</a> ou por WhatsApp clicando <a href="https://wa.me/5519997487329" style={{ fontWeight: 'bold', color: 'blue' }}>AQUI</a>.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">14- Quais os esportes são oferecidos para prática na AECS Gigantes?</button>
      <div className="faq-answer">O esporte oferecido é o Rugby em Cadeira de Rodas.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">15- Quem pode participar do projeto de iniciação?</button>
      <div className="faq-answer">Pessoas a partir de 16 anos. O Rugby é voltado originalmente para atletas com tetraplegia, mas hoje também inclui pessoas com condições como poliomielite, distrofia muscular, amputações múltiplas e outras deficiências neuromusculares, entre em contato com a gente para tirar qualquer dúvida.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">16- A AECS Gigantes oferece palestras?</button>
      <div className="faq-answer">Sim. A equipe realiza palestras motivacionais, educativas e sobre inclusão em empresas e instituições.</div>
    </div>

    <div className="faq-item">
      <button className="faq-question">17- Posso ser voluntário?</button>
      <div className="faq-answer">Sim. Você pode se voluntariar para apoio técnico, eventos, comunicação e muito mais.</div>
    </div>
  </main>

    </>
  )
}

export default PerguntasFrequentes;
