import React from "react";
import './styles.css';

function Formulario(){

    return (
        <div className="container">
            <h2>Contato</h2>
            <form action="action_page.php">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="name" name="firstname" placeholder="Digite seu nome aqui..." />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email aqui..." />
                <label htmlFor="country">País</label>
                <select id="country" name="country">
                    <option value="default">Selecione um país ou continente</option>
                    <option value="brazil">Brasil</option>
                    <option value="canada">Canadá</option>
                    <option value="usa">EUA</option>
                    <option value="mexico">México</option>
                    <option value="europe">Europa</option>
                    <option value="africa">África</option>
                    <option value="asia">Ásia</option>
                    <option value="oceania">Oceania</option>
                    <option value="middle-east">Oriente Médio</option>
                    <option value="southamerica">América do Sul</option>
                    <option value="centralamerica">América Central</option>
                </select>
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" placeholder="Digite sua mensagem aqui..."></textarea>
                <input type="submit" value="Enviar"  id="button" />
            </form>
        </div>
    )
}

export default Formulario;