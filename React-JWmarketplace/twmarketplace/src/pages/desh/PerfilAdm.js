import React, { Component } from 'react';
import '../../assets/style/PerfilAdm.css';

// import Acessibilidade from '../../components/barraAcessibilidade/Acessibilidade.js';
// import Rodape from '../../assets/components/Rodape.css';

class PerfilAdm extends Component {

    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: ""
        }
    }

    render() {
        console.log("teste")
        return (
          
            <div>
                {/* <Acessibilidade/> */}
                    <div class="conteudoCentral">

                <div className="infoUser">
                    <section className="conteudo">

                        <h1> Perfil de Usuário </h1>
                            <div class="separador">
                                <hr size="1" color="#D3D3D3"/>
                            </div>
                        <div id="info">

                            <form id="box-form">
                                <div id="form1">
                                    <label>Nome:</label>
                                    <input type="text" name="nomeCompleto" className="nomeUser" placeholder=" Nome Completo" />

                                    <label>Alterar E-mail:</label>
                                    <input type="text" name="alterEmail" className="emailUser" placeholder=" Insira uma nova senha" />

                                    <label>Confirme seu E-mail:</label>
                                    <input type="text" name="alterConfEmail" className="cEmailUser" placeholder=" Confirme  sua senha" />
                                </div>

                                <div id="form2">

                                    <label id="idEmail">Alterar Senha:</label>
                                    <input type="email" name="senhaUser" className="alterarSenha" placeholder=" Insira um novo e-mail" />

                                    <label id="idConfEmail">Confirme sua Senha:</label>
                                    <input type="email" name="confirsenha" className="confSenha" placeholder=" Confirme seu e-mail" />

                                    <div className="botaofinal">
                                        <button className="btnFinal"><p>Atualizar</p></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    </div>
                </div>
                {/* <Rodape/> */}
            </div>
        );
    }
}

export default PerfilAdm;