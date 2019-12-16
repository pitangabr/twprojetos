import React from 'react';
import '../assets/PagesHtml/perfil_Usuario/CSS/PerfilUsuario.css';

import logo from '../assets/imagens/logo1.png';
import lupa from  '../assets/imagens/pesquisa.png';

function MenuAdm() {
    return (
        <header>
            <div className="menu">
                <section id="barra_acessibilidade">
                {/* <!--Barra de acessibilidade--> */}
                    <ul className="barra_conteudo">
                        <li><a href="#">Acessibilidade</a></li>
                        <li><a href="#">A-</a></li>
                        <li><a href="#">A+</a></li>
                        <li><a href="#">Modo Noturno</a></li>
                    </ul>
                </section>
            
                <section>
                {/* <!--Menu superior--> */}
                    <nav id="menu_base1">
                        <div className="logo1">
                            <a href="#"><img src={logo} alt="Logo TWmarketplace"/></a>
                        </div>
            
                        <div className="BarraPesquisa1">
                            <form action="Busca" method="GET" id="buscar1">
                            {/* <!--Barra de pesquisa--> */}
                                <input type="search" name="Busca" className="buscar1" placeholder="Buscar..."/>
                                <img src={lupa} alt="Pesquisar"/>
                            </form>
                        </div>
            
                        <div className="barramenu1">
                            <ul>
                                <li><a href="#" className="minhaconta1">Home</a></li>
                                <li><a href="#" className="sair1">Sair</a></li>
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default MenuAdm;