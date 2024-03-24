import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import PapelNaComposicao from './componentes/PapelNaComposicao/PapelNaComposicao';
import {classesJogaveis} from './data'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [papeisNaComposicao, setPapeisNaComposicao] = useState([
    {
      id: uuidv4(),
      nome: 'Tank',
      corPrimaria: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'DPS',
      corPrimaria: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'AoE',
      corPrimaria: '#00CED1',
    },
    {
      id: uuidv4(),
      nome: 'Scout',
      corPrimaria: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Support',
      corPrimaria: '#E06869',
    },
    {
      id: uuidv4(),
      nome: 'Utilitarian',
      corPrimaria: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Controller',
      corPrimaria: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Face',
      corPrimaria: '#FF8A29',
    }
  ])
  
  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  const deletarJogador = (id) => {
    console.log('id', id, 'jogadores', jogadores)
    setJogadores(jogadores.filter(jogador => jogador.id !== id))
  }

  const mudarCorDoTime = (cor, id) => {
    setPapeisNaComposicao(papeisNaComposicao.map(pnc => {
      if(pnc.id === id) {
        pnc.corPrimaria = cor;
      }
      return pnc;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario papeisNaComposicao={papeisNaComposicao.map(pnc => pnc.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} classesJogaveis={classesJogaveis} 
     />

      {papeisNaComposicao.map(pnc => 
        <PapelNaComposicao
          mudarCor={mudarCorDoTime}
          key={pnc.id}
          id= {pnc.id}
          nome={pnc.nome}
          corPrimaria={pnc.corPrimaria}
          jogadores={jogadores.filter(jogador => jogador.papelNaComposicao === pnc.nome)}
          aoDeletar={deletarJogador}
        />
      )}
    </div>
  );
}

export default App;
