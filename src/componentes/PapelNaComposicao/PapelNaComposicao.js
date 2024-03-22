import Jogador from '../Jogador/Jogador'
import './PapelNaComposicao.css'

const PapelNaComposicao = (props) => {
    return (
        (props.jogadores.length > 0) ? <section className='papelNaComposicao' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} classe={jogador.classe} subclasse={jogador.subclasse} imagem={jogador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default PapelNaComposicao