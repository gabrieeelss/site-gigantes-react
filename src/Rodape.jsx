import './Rodape.css'

function Rodape() {

  return (
    <>
      <footer className="rodape">
    <div className="container rodape-flex">
      <div className="img-left">
        <img src="./src/assets/img/geral/SeloCBCP_BrancoH.png" alt="Logo CBCP" />
      </div>

      <div className="rodape-centro">
        <p>&copy; 2025 ASSOCIAÇÃO DE ESPORTES E CULTURA SUPERAÇÃO "GIGANTES"<br />CNPJ: 17.869.245/0001-52</p>
        <div className="contato-social">
          <span>Telefone/WhatsApp: (19)99748-7329 |
            <a href="https://wa.me/5519997487329">Fale conosco</a>
          </span>
          <div className="social-icons">
            <a href="https://facebook.com/gigantesrugbycr" target="_blank">
              <img src="./src/assets/img/geral/Facebook_logo_(square).png" alt="Facebook" /></a>
            <a href="https://instagram.com/gigantes_rugby" target="_blank">
              <img src="./src/assets/img/geral/Instagram_icon.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <div className="img-right">
        <img src="./src/assets/img/geral/Logo-Fiec.png" alt="Logo FIEC" />
      </div>
    </div>
  </footer>
    </>
  )
}

export default Rodape
