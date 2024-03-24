import Jogador from '../Jogador/Jogador'
import './PapelNaComposicao.css'
import hexToRgba from 'hex-to-rgba'
import { v4 as uuidv4 } from 'uuid'

const PapelNaComposicao = (props) => {
    return (
        (props.jogadores.length > 0) ? <section className='papelNaComposicao' style={{backgroundColor: hexToRgba(props.corPrimaria,'0.6')}}>
            <input onChange={e => props.mudarCor(e.target.value, props.id)} value={props.corPrimaria} type='color' className='input-cor'/>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} id={uuidv4()} nome={jogador.nome} classe={jogador.classe} subclasse={jogador.subclasse} imagem={jogador.imagem} aoDeletar={props.aoDeletar}/>)}
            </div>
        </section>
        : ''
    )
}

export default PapelNaComposicao