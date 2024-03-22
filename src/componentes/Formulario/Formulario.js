import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'
import { useState } from 'react'
import { subclasseJogaveis } from '../../data.js'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [subclasse, setSubclasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [papelNaComposicao, setPapelNaComposicao] = useState('')

    const aoSalvar = (e) =>{
        e.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            classe,
            subclasse,
            imagem,
            papelNaComposicao
        })
        setNome('')
        setClasse('')
        setSubclasse('')
        setImagem('')
        setPapelNaComposicao('')
    }

    const handleSubclasse = subclasseJogaveis[0][classe] ?? [] 
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Jogador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' valor={nome} aoAlterado={valor => setNome(valor)}/>
                <ListaSuspensa obrigatorio={true} label='Classe' valor={classe} aoAlterado={valor => {setClasse(valor); setSubclasse('')}} itens={props.classesJogaveis}/>
                {classe && (<ListaSuspensa obrigatorio={true} label='Subclasse' valor={subclasse} aoAlterado={valor=>{
                    setSubclasse(valor)}} itens={handleSubclasse}/>)}
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label='Papel na Composição' itens={props.papeisNaComposicao} valor={papelNaComposicao} aoAlterado={valor => setPapelNaComposicao(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario