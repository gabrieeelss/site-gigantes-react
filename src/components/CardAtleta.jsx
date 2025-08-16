import './CardAtleta.css';

function  CardAtleta({imagem, nome, classificacao, atletadesde, instagram}) {
    return (
        <>
            <div className="card-equipe">
                <img src={imagem} alt={nome} />
                <h2>{nome}</h2>
                <p><strong>Classificação:</strong> {classificacao}</p>
                <p><strong>Atleta Desde:</strong> {atletadesde}</p>
                <div className="social-icons">
                  <a href={instagram}><img src="./img/Instagram_icon.png" alt={instagram} /></a>
                </div>
              </div>
        </>
    )
}

export default CardAtleta;