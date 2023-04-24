import style from "./TextoComponentes.module.css"

function TextoComponentes(props){
    
    return(
        <div className={style.corpo_texto}>
            <h2>Venha Explorar esse lugar incrível {props.lugar}</h2>
            <p>{props.texto}</p>
            <img src={props.logo_texto} alt="logo" />
            
        </div>
    )
}

export default TextoComponentes