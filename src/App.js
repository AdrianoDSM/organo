import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import PapelNaComposicao from './componentes/PapelNaComposicao/PapelNaComposicao';
import Rodape from './componentes/Rodape/Rodape';

function App() {

  const papeisNaComposicao = [
    {
      nome: 'Tank',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Blaster',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Scout',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Support',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
     {
      nome: 'Utilitarian',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
     {
      nome: 'Controller',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
     {
      nome: 'Face',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario papeisNaComposicao={papeisNaComposicao.map(pnc => pnc.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} />

      {papeisNaComposicao.map(pnc => <PapelNaComposicao 
      key={pnc.nome} 
      nome={pnc.nome} 
      corPrimaria={pnc.corPrimaria} 
      corSecundaria={pnc.corSecundaria}
      jogadores={jogadores.filter(jogador => jogador.papelNaComposicao === pnc.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
