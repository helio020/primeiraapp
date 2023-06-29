import React from "react";
import './styles.css';
import Logo from '../../assets/OIP.jpg'
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <img style={{ objectFit: 'contain' }} id="logo" src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Hélio Ribeiro</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>  
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;