import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label style={{color: '#992244'}}>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value="">Selecione</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa