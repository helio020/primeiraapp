import React from "react";
import './styles.css';
import Star from '../../assets/star.svg';
import User from '../../assets/b1.png';

function Coments(){
    return (
        <>
            <h1>Depoimentos</h1>

            <section className="boxes">
                <div className="box">
                        
                    <img className="user" src={User} alt="user"/>
                    <h3>Maria Eduarda</h3>

                    <div className="stars">
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>                
                    </div>
                    
                    <p> Eu achei o filme excelente, o final impressiona. Aguardando a sequência!</p>
                
                </div>

                <div className="box">
                        
                    <img className="user" src={User} alt="user"/>
                    <h3>Miguel Ángel</h3>

                    <div className="stars">
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>                
                    </div>
                    
                    <p> Gostei mais do anterior, mas é só questão de gosto mesmo kkkkk. ;D</p>
                
                </div>

                <div className="box">
                        
                    <img className="user" src={User} alt="user"/>
                    <h3>Nancy</h3>

                    <div className="stars">
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>
                        <img className="star" src={Star} alt="star"/>                
                    </div>
                    
                    <p>Sempre amei o universo do Batman, tomara que tenham muito mais filmes!!!</p>
                
                </div>
            </section>
        </>
    )
}

export default Coments;