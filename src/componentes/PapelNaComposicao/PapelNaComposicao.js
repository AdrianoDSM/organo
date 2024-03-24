import Jogador from '../Jogador/Jogador'
import './PapelNaComposicao.css'
import hexToRgba from 'hex-to-rgba'

const PapelNaComposicao = (props) => {
    const backgroundImageWithOpacity = (imageUrl, opacity) => {
        return `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${imageUrl})`;
    };
    return (
        (props.jogadores.length > 0) ? <section className='papelNaComposicao' style={{backgroundImage:backgroundImageWithOpacity("/imagens/dice-background-img.png", 0.4), backgroundSize: '500px 300px', backgroundColor: hexToRgba(props.corPrimaria,'0.6')}}>
            <input onChange={e => props.mudarCor(e.target.value, props.id)} value={props.corPrimaria} type='color' className='input-cor'/>
            <h3 style={{backgroundColor:props.corPrimaria, borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} id={jogador.id} nome={jogador.nome} classe={jogador.classe} subclasse={jogador.subclasse} imagem={jogador.imagem} aoDeletar={props.aoDeletar}/>)}
            </div>
        </section>
        : ''
    )
}

export default PapelNaComposicao