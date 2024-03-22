import './Jogador.css'

const Jogador = ({nome, imagem, classe, subclasse, corDeFundo}) => {
    return (
        <div className='jogador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{classe}</h5>
                <h6>{subclasse}</h6>
            </div>
        </div>
    )
    
    
}

export default Jogador