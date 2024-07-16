import Header from './Header';
import './App.css';
import { useState } from 'react';
import {mock1} from './constants/users'
import Resultados from './Resultados';
import CONFIG from './config/config'
import Formulario from './Formulario';
  
function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const callServer = async(param)=> {
    // console.log("CLICK!");
    if (CONFIG.use_server) {
      let queryparams
      try {
        if ( param==="all") {
          queryparams = "?limit=" + CONFIG.num_items;
        } else {
          queryparams= "/search?q=" + query
        }
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        const data = await response.json();
        console.log(data);
        setResultado(data.users);
        setError(null);
      } catch (error) { 
        console.log(error);
        setError({description: error.message});
      }
    } else {
      setResultado(mock1.users)
      setError(null);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='buscar'>
      <Formulario contenido={query} setContenido ={setQuery} callServer={callServer} />
      <button className='btn' id='botonall' onClick={() => callServer("all")}> Buscar Todos </button>
      </div>
      
      {error && <h1>Habido un error: {error.description}</h1>}
      {resultado && <Resultados resultado={resultado} />}
    </div>
  );
}

export default App;
