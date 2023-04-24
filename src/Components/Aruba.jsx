import style from "./Aruba.module.css"
import TextoComponentes from "./TextoComponentes"
import logo from "../Imagens/viagens.jpg"

function Aruba(){
    return(
        <div className={style.corpo}>
            <TextoComponentes
                lugar="Aruba!"
                texto="Praias paradisíacas, mar cristalino, hotéis requintados, cassinos e programações para toda a família são alguns dos atrativos de Aruba."
                logo_texto={logo}
            />
        </div>
    )
}

export default Aruba