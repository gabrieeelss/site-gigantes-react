import './Contato.css';

function Contato() {
  return (
    <>
      <div className="container-contato">
        {/* Box Local de Treinamento */}
        <div className="box">
          <h2>📍 Local de Treinamento</h2>
          <p><strong>Nome:</strong> CEU Thaís Fernanda Ribeiro</p>
          <p>
            <strong>Endereço:</strong> Rua Demerval da Silva Pereira, s/n – Vila Esperança, Campinas – SP
          </p>
          <p><strong>Horários:</strong></p>
          <ul className="horarios">
            <li>Terças: 09 às 12h</li>
            <li>Quintas: 18h às 21h</li>
            <li>Sábados: 9h às 12h</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.8742839734346!2d-47.116841699999995!3d-22.8441402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c74788094819%3A0x4c625eaa958236cb!2sCEU%20Tha%C3%ADs%20Fernanda%20Ribeiro!5e0!3m2!1spt-BR!2sbr!4v1752710451747!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            title="Mapa Local de Treinamento"
          ></iframe>
        </div>

        {/* Box Formulário de Contato */}
        <div className="box">
          <h2>📨 Fale Conosco</h2>
          <form action="https://formsubmit.co/aecsgigantes@gmail.com" method="POST">
            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="tel" name="telefone" placeholder="Telefone (com DDD)" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea name="mensagem" rows="5" placeholder="Digite sua mensagem" required></textarea>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="#" />

            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>

        {/* Box Sede Administrativa */}
        <div className="box">
          <h2>🏢 Sede Administrativa</h2>
          <p>
            <strong>Endereço:</strong><br />
            Rua José Monteiro Neto nº150 Jd. Mirassol<br />
            Campinas – SP, CEP 13069-512
          </p>
          <p>
            <strong>Telefone:</strong><br />
            (19) 99748-7329
          </p>
          <p>
            <strong>Email:</strong><br />
            aecsgigantes@gmail.com
          </p>
          <p>
            <strong>Horário de Atendimento:</strong><br /> Segunda a Sexta 08:00 às 18:00
          </p>
        </div>
      </div>
    </>
  );
}

export default Contato;
