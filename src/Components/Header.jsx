import {Link} from 'react-router-dom'

import style from "./Header.module.css"
import logo from "../Imagens/viagens.jpg"
import lupa from "../Imagens/lupa.png"

function Header(){
    return(
    <div>
        <header>
            <Link to='/' className={style.AreaLogo}>
                <img src={logo} alt="Logo da agência" />
            </Link>

            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Canyon'>Grand Canyon</Link></li>
                    <li><Link to='/Escocia'>Escócia</Link></li>
                    <li><Link to='/Muralha'>Muralhas da China</Link></li>
                    <li><Link to='/Aruba'>Aruba</Link></li>
                </ul>
            </nav>

            <div className={style.areaPesquisa}>

                <input type="text" maxlength="50" size="30" />

                <div className={style.areaIconPesquisa}>
                    <img src={lupa} alt="Lupa pesquisa" />
                </div>
            </div>
            
        </header>
    </div>
    )
}

export default Header