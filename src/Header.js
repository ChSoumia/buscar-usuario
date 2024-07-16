
import {mock1} from './constants/users'
import { useState } from 'react';
import Resultados from './Resultados';


export default function Header(props) {
    const [resultado, setResultado] = useState(null);

    const callServer = (param) =>{
        if ( param==="all"){
            setResultado(mock1.users)
        } 
    }
    return (
        <>
        <nav className="navBar" >
            <div id="cabecera">
                    <img className="logo" src={process.env.PUBLIC_URL + "/sun.webp"} alt="logo de la web" />
                    <h3 className="mensaje">ChSoumia.</h3>
                    
            </div>
            
            <ul className="links">
                <li><a href="/" className="link">Home</a></li>
                <li><a href="#" className="link" onClick={() => callServer("all")}>Usuario</a></li>
                <li><a href="#" className="link">Contacto</a></li>

            </ul>         
        </nav>
        
        {resultado && <Resultados resultado={resultado} />}
    </>
    
    )
}