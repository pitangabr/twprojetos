import React from 'react';
import '../../assets/components/MenuDash.css';

function MenuLateralD (){
    return(
        <div>
             {/* <!--INICIO MENU LATERAL--> */}

             <main>
                <section id="Menu_lateral">

                    <div class="nome_usuario">
                        <p>Carlos Eduardo</p>
                    </div>
        
                    <nav class="conteudo">
                        <ul>
                            <h3>NAVEGAÇÃO</h3>
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
                                    <a href="#">Notificações</a>
                                </li>

                            <h3>USUÁRIOS</h3>

                                <li>
                                    <a href="#">Cadastrar Usuários</a>
                                </li>

                                <li>
                                    <a href="#">Listar Usuários</a>
                                </li>
                        </ul>
                    </nav>
                </section>
                {/* <hr class="linhaLa"/> */}
            </main>
        </div>
    );
}

export default MenuLateralD;