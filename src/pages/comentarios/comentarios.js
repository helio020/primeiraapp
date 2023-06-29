import React from "react";
import Coments from "../../components/coments/coments";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './styles.css';

function Comentarios(){
    return (
        <>
            <Header />
            <div id="banner"></div>
            <Coments />
            <Footer />
        </>
    )
}

export default Comentarios;