import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/> 
      <CampoTexto label='Nome'/>
      <CampoTexto label='Nome'/>
      <CampoTexto label='Nome'/>
    </div>
  );
}

export default App;
