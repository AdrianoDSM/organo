import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import PapelNaComposicao from './componentes/PapelNaComposicao/PapelNaComposicao';
import {classesJogaveis, papeisNaComposicao} from './data'

function App() {

  
  

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario papeisNaComposicao={papeisNaComposicao.map(pnc => pnc.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} classesJogaveis={classesJogaveis} 
     />

      {papeisNaComposicao.map(pnc => <PapelNaComposicao
        key={pnc.nome}
        nome={pnc.nome}
        corPrimaria={pnc.corPrimaria}
        corSecundaria={pnc.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.papelNaComposicao === pnc.nome)}
      />)}
    </div>
  );
}

export default App;
