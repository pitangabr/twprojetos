import React from 'react';
import '../../assets/components/MenuEsque.css'
import '../../assets/img/homem.jpg'

function MenuEsque (){
    return(
        <div>
            {/* <!--INICIO MENU LATERAL--> */}

            <main>
                <section id="Menu_lateral">
                    <div class="perfil">
                        <img src= {require("../../assets/img/homem.jpg")} alt="Foto perfil usuário"/>
                    </div>

                    <div class="nome_usuario">
                        <p>Carlos Eduardo</p>
                    </div>
        
                    <nav class="conteudo">
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
                                <a href="#">Sair</a>
                            </li>
                        </ul>
                    </nav>
                </section>
                <hr class="linhaLa"/>
            </main>
        </div>
    );
}

export default MenuEsque;