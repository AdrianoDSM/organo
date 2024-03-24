import { IoIosCloseCircle } from "react-icons/io";
import './Jogador.css'


const Jogador = ({id, nome, imagem, classe, subclasse, corDeFundo, aoDeletar}) => {

    return (
        <div className='jogador' key={id} id={id}>
            <IoIosCloseCircle 
                size={25} 
                className='deletar' 
                onClick={()=> aoDeletar(id)}
            />
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