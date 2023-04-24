import style from "./Footer.module.css"
import insta from "../Imagens/insta.jpg"
import face from "../Imagens/face.jpg"
import tiktok from "../Imagens/tiktok.png"
import whats from "../Imagens/whats.png"

function Footer(){
    
    return(
        <div className={style.AreaFooter}>
            <p className={style.textFooterMaior}> Siga-nos em nossas redes sociais</p>
            <div className={style.AreaRedesSocias}>
                <div className={style.espacoIcon}>
                    <img src={insta} alt="Logo Instagram" />
                </div>
                <div className={style.espacoIcon}>
                    <img src={face} alt="Logo Facebook" />
                </div>
                <div className={style.espacoIcon}>
                    <img src={tiktok} alt="Logo Tiktok" />
                </div>
                <div className={style.espacoIcon}>
                    <img src={whats} alt="Logo WhatsApp" />
                </div>
            </div>
            <p className={style.textFooterMenor}> Telefone de contato:(11) 91234-5678 </p>
        </div>
    )
}

export default Footer