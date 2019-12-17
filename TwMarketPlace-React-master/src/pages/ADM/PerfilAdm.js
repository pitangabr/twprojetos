import React, { Component } from 'react';
import '../../assets/PagesHtml/perfil_Usuario/CSS/PerfilUsuario.css';
import MenuAdm from '../../Componentes/MenuADM';

class Notificacao extends Component {
    render() {
        return(
        <>
            <MenuAdm></MenuAdm>
            <main id="perfilmain">
                <section id="menu_lateral_esquerdo">
                    <div class="perfil">
                        <div class="nome_usuario">
                            <p>Carlos Eduardo</p>
                        </div>
                    </div>
                    <ul>
                        <li><a href="../TWmarketplace - Perfil usuário/PerfilUsuário.html">Perfil</a></li>
                        <li><a href="#">Interesses</a></li>
                        <li><a href="../TWmarketplace - Perfil usuário/PerfilUsuarioConfig.html">Notificações</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li className= "tabulatura">Usuarios</li>
                        <li><a href="#">Novos Cadastros</a></li>
                        <li><a href="#">Lista de usuários</a></li>
                    </ul>
                </section>

                <section id="lateral_direita">
                    <div class="topo_direito">
                        <h1>Notificações</h1>
                    </div>
                    <div class="canto_direito">
                        <ul>
                            <li><a href="#">> Seu Cadastro está pendente</a></li>
                            <li><a href="#">> Seu pedido henf#08765 foi aprovado</a></li>
                            <li><a href="#">> Notificação</a></li>
                            <li><a href="#">> Notificação</a></li>
                            <li><a href="#">> Notificação</a></li>
                            <li><a href="#">> Notificação</a></li>
                            <li><a href="#">> Notificação</a></li>
                            <li><a href="#">> Notificação</a></li>
                            <li><a href="#">> Notificação</a></li>
                            <li><a href="#">> Notificação</a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
        )
    }
}

export default Notificacao;