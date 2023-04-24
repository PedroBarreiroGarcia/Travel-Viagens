import style from "./Canyon.module.css"
import TextoComponentes from "./TextoComponentes"
import logo from "../Imagens/viagens.jpg"

function Caynon(){
    return(
        <div className={style.corpo}>
            <TextoComponentes
                lugar="Grand Canyon!"
                texto="O Grand Canyon fica no estado do Arizona e é cortado pelo não tão tímido assim Rio Colorado, e forma uma paisagem mais imponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é o passei mais procurado por quem visita Las Vegas, que fica no estado vizinho, Nevada. "
                logo_texto={logo}
            />
        </div>
    )
}

export default Caynon