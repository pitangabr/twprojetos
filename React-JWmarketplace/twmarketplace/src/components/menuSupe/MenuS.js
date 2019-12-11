import React from 'react'
import '../../assets/components/body.css'
import '../../assets/components/MenuSu.css'
import '../../assets/img/logo.png'
import '../../assets/img/pesquisa.png'
import '../../assets/img/028-shopping bags.png'
import '../../assets/img/message.png'

function MenuSu (){
    return (
        <div>
                    {/* <!-- Menu superior--> */}
                <section>
                    <nav id="menu_superior">

                        <div className="logo">

                            <a href="../imagens/logo.png">
                                <img src={require("../../assets/img/logo.png")}alt="Logo TWmarketplace" />
                            </a>

                        </div>

                        <div className="BarraPesquisa">

                                {/* <!--Barra de pesquisa--> */}
                            <form action="Busca" method="GET" id="formulario_busca">

                                <input type="search" name="Busca" className="input_buscar" placeholder="Buscar..."/>
                                <img id="lupa" src={require("../../assets/img/pesquisa.png")}alt="Pesquisar"/>

                            </form>
                        </div>

                        <div className="icones_compras_mensagem">

                            <a href="#">
                                <img id="sacola_compras" src={require("../../assets/img/028-shopping bags.png")}alt="Sacola de pedidos" />
                            </a>

                            <a href="#">
                                <img id="mensagens" src={("../../assets/img/message.png")} alt="Notificações"/>
                            </a>

                        </div>

                        <div className="minhaconta_sair">

                            <ul>
                                <li>
                                    <a href="../Editado-Tw/PerfilUsuário_MeusPedidos.html" className="botao_minhaconta">Minha Conta</a>
                                </li>

                                <li>
                                    <a href="../Editado-Tw/login.html" className="botao_sair">Sair</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </section>
                {/* // <!--Fim menu superior --> */}
        </div>
    );
}

export default MenuSu;