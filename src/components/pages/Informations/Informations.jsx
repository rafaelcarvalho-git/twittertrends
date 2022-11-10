import './Informations.css'

function Informations() {
    return (
        <section className="informations">
            <div className="card text-center mx-auto my-auto shadow">
              <div className="card-header text-white">
                Projeto Twitter Trends para disciplina Projeto de Sistemas Web I
              </div>
              <div className="card-body">
              <p className="card-text">Projeto focado em desenvolver uma aplicação React utilizando uma API para buscar os tópicos mais comentados do momento no Twitter.</p>
                <h5 className="card-title mb-3">Desenvolvido por:</h5>
                <a href="https://github.com/rafaelcarvalho-git" target="_blank" rel="noreferrer"><h6>Rafael Carvalho</h6></a>
                <a href="https://github.com/TheSamuelVitor" target="_blank" rel="noreferrer"><h6>Samuel Vitor</h6></a>
                <a href="" target="_blank" rel="noreferrer"><h6>Michele Araujo</h6></a>
                <h6 className="mb-3 mt-4">Repositório no Github</h6>
                <a href="https://github.com/rafaelcarvalho-git/twittertrends" target="_blank" rel="noreferrer">github.com/rafaelcarvalho-git/twittertrends</a>
              </div>
              <div className="card-footer text-white">
                IFCE - Crato
              </div>
            </div>
        </section>
    )
}

export default Informations;