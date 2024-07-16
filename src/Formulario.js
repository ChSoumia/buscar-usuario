export default function Formulario(props) { 
    return (
        < div className="formulario">
            <h2 id='buscador'>Buscador de Usuarios</h2>
            <input className="query" id='query' value={props.contenido} onChange={e=>props.setContenido(e.target.value)} type="text" placeholder='Text a buscar' />
            <button className="btn" id='botonsearch' onClick={() => props.callServer()} > Buscar</button>
        </div>
    )
}