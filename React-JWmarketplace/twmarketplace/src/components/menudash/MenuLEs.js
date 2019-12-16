import React from 'react';
import '../../assets/components/MenuDash.css';

function MenuLateralD (){
    return(
        <div>
             <main id="perfilmain">
                <section id="menu_lateral_esquerdo">
                    <div class="perfil">
                        <div class="nome_usuario">
                            <p>Carlos Eduardo</p>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="#">Perfil</a>
                        </li>

                        <li>
                            <a href="#">Interesses</a>
                        </li>

                        <li>
                            <a href="#">Notificações</a>
                        </li>

                        <li>
                            <a href="#">Produtos</a>
                        </li>

                        <li className= "tabulatura">USUÁRIOS</li>
                        <li>
                            <a href="#">Novos Cadastros</a>
                        </li>

                        <li>
                            <a href="#">Lista de usuários</a>
                        </li>
                    </ul>
                </section>

                <section id="lateral_direita">
                    <div class="topo_direito">
                        <h1>Perfil do Administrador</h1>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MenuLateralD;