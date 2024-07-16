export default function Resultados(props) {
    return (
        <div>
            <ul id="resultados">
                {props.resultado.map((item,index) => {
                    return(
                    <li key ={item.id}>
                            <p style={{textAlign:'left', marginLeft:'.4rem'}}>Nombre: <b>{item.firstName}</b> {item.lastName}</p>
                            <p>Email: <i style={{color:'#028bfc' }}>{item.email}</i></p>
                            <p><img src={item.image} alt={"imagen del usuario" + item.firstName } /></p>
                        
                    </li>)
                })}
            </ul>
        </div>)
}