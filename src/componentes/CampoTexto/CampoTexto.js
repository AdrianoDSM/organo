import './CampoTexto.css'

const CampoTexto = (props) => {

 

    return (
        <div className="campo-texto">
            <label style={{color: '#992244'}}>{props.label}</label>
            <input value={props.valor} onChange={e=>props.aoAlterado(e.target.value)} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto