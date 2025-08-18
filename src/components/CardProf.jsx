import './CardProf.css';

function  CardProf({imagem, nome, instagram, funcao}) {
    return (
        <>
            <div className="card-equipe">
                <img src={imagem} alt={nome} className='foto-prof'/>
                <h2>{nome}</h2>
                <p><strong>Função/Profissão:</strong> {funcao}</p>
                <div className="social-icons">
                  <a href={instagram}><img src="./img/Instagram_icon.png" alt={instagram} /></a>
                </div>
              </div>
        </>
    )
}

export default CardProf;

