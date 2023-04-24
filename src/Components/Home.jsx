import style from "./Home.module.css"
import mala from "../Imagens/mala.jpg"

function Home(){
    
    return(
        <div className={style.AreaConteudo}>
            <div className={style.ImgMala}>
                <img src={mala} alt="Imagem de uma mala" />
            </div>
            <div className={style.AreaTextoConteudo}>
                <h1 className={style.TitHome}>Encontre aqui a viajem dos seus sonhos!</h1>
                <p className={style.TextHome}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, qui cumque dolore, nisi perspiciatis aliquam, autem doloremque itaque recusandae eaque temporibus ipsa error nulla? Laudantium distinctio neque deserunt tempore impedit!</p>
            </div>
        </div>
    )
}

export default Home