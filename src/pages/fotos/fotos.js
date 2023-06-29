import React from "react";
import Footer from "../../components/footer/footer";
import Galeria from "../../components/galeria/galeria";
import Header from "../../components/header/header";
import './styles.css';

function Fotos(){
    return (
        <div>
           <Header />
           <div id="banner"></div>
           <Galeria />
           <Footer />
        </div>
    )
}

export default Fotos;