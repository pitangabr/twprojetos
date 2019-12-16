import React from 'react';
import '../assets/PagesHtml/HOME/CSS/style.css';

//Importando as imagens
import logo from '../assets/imagens/logo1.png';
import lupa from  '../assets/imagens/pesquisa.png';
import hover_Notebook from  '../assets/imagens/Hover/laptop.png';
import notebook from  '../assets/imagens/laptop.png';
import hover_Celular from  '../assets/imagens/Hover/mobile-phone.png';
import celular from  '../assets/imagens/mobile-phone.png';
import hover_Impressora from  '../assets/imagens/Hover/printer.png';
import impressora from  '../assets/imagens/printer.png';
import hover_Monitor from  '../assets/imagens/Hover/television.png';
import monitor from  '../assets/imagens/television.png';
import hover_Acessorio from  '../assets/imagens/Hover/usb.png';
import acessorio from  '../assets/imagens/usb.png';
import hover_categoria from '../assets/imagens/Hover/categorias.png';
import categoria from  '../assets/imagens/categoria.png';


function Menu() {
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
            {/* Fim barra de acessibilidade */}

            <section>
                {/* <!--Menu superior--> */}
                <nav id="menu_superior">
                    <div className="logo">
                        <a href="../Editado-Tw/index.html"><img src={logo}
                        alt="Logo TWmarketplace"/></a>
                    </div>

                    <div className="BarraPesquisa">
                        <form action="Busca" method="GET" id="formulario_busca">
                            {/* <!--Barra de pesquisa--> */}
                            <input type="search" name="Busca" className="input_buscar" placeholder="Buscar..."/>
                            <img id="lupa" src={lupa} alt="Pesquisar"/>
                        </form>
                    </div>

                    <div className="minhaconta_sair">
                        <ul>
                            <li><a href="../Editado-Tw/PerfilUsuário_MeusPedidos.html" className="botao_minhaconta">MinhaConta</a></li>
                            <li><a href="../Editado-Tw/login.html" className="botao_sair">Sair</a></li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>
        {/* <!--Fim menu superior--> */}

        <div className="menu_inferior_home">
            <section>
                <nav id="menu_inferior">
                    {/* <!--Menu inferior--> */}
                    <ul>
                        {/* <!--Menu categorias--> */}
                        <li><a href="#">
                                {/* <!--Notebooks--> */}
                                <div className="lista_categorias">
                                    <img src={hover_Notebook} alt="Notebooks" className="notebooks"/>
                                    <img src={notebook} alt="Notebooks"/>
                                </div>
                            <p>Notebooks</p>
                        </a></li>

                        <li><a href="#">
                                {/* <!--Smartphones--> */}
                                <div className="lista_categorias">
                                    <img src={hover_Celular} alt="Smartphones" className="smartphones"/>
                                    <img src={celular} alt="Smartphones"/>
                                </div>
                            <p>Smartphones</p>
                        </a></li>


                        <li><a href="#">
                                {/* <!--Monitores--> */}
                                <div className="lista_categorias">
                                    <img src={hover_Monitor} alt="Monitores" className="monitores"/>
                                    <img src={monitor} alt="Monitores"/>
                                </div>
                            <p>Monitores</p>
                        </a></li>

                        <li><a href="#">
                                {/* <!--Acessórios--> */}
                                <div className="lista_categorias">
                                    <img src={hover_Acessorio} alt="Acessórios" className="acessorios"/>
                                    <img src={acessorio} alt="Acessórios"/>
                                </div>
                            <p>Acessórios</p>
                        </a></li>

                        <li><a href="#">
                                {/* <!--Todas categorias--> */}
                                <div className="lista_categorias">
                                    <img src={hover_categoria} alt="Todas as Categorias" className="todas_as_categorias"/>
                                    <img src={categoria} alt="Todas as Categorias"/>
                                </div>
                            <p>Todas <br/> categorias</p>
                        </a></li>
                    </ul>
                    {/* <!--Fim menu categorias--> */}
                </nav>
            </section>
            {/* <!--Fim menu inferior--> */}
        </div>
        <hr className="hr"/>
    </header>
  );
}
export default Menu;