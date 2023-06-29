import React from "react";
import Footer from "../../components/footer/footer";
import Formulario from "../../components/formulario/formulario";
import Header from "../../components/header/header";
import './styles.css';

function Contato(){

    return (
        <>
            <Header />
            <div id='banner'></div>
            <Formulario />
            <Footer />
        </>
    )
}

export default Contato;