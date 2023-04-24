import style from "./Muralha.module.css"
import TextoComponentes from "./TextoComponentes"
import logo from "../Imagens/viagens.jpg"

function Muralha(){
    return(
        <div className={style.corpo}>
            <TextoComponentes
                lugar="Muralha da China!"
                texto="É a mais longa estrutura construída pelo homem. Em 1987, a Organização das Nações Unidas (ONU) classificou o monumento como Patrimônio Histórico Mundial, protegendo-o contra os projetos de construção civil permitidos pelas leis chinesas. Tem 21.196 Km de extensão e também é considerada uma das 7 maravilhas do mundo."
                logo_texto={logo}
            />
        </div>
    )
}

export default Muralha