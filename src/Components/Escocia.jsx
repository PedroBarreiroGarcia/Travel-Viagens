import style from "./Escocia.module.css"
import TextoComponentes from "./TextoComponentes"
import logo from "../Imagens/viagens.jpg"

function Escocia(){
    return(
        <div className={style.corpo}>
            <TextoComponentes
                lugar="Escócia!"
                texto="Turismo na Escócia, localizado ao lado da Inglaterra, fica a Escócia, um dos países pertencentes ao Reino Unido. Que traz consigo uma grande carga histórica, lindas paisagens naturais e construções antigas, como seus castelos medievais. "
                logo_texto={logo}
            />
        </div>
    )
}

export default Escocia