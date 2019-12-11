import React, { Component } from 'react';
import '../../assets/style/PerfilAdm.css';

import Acessibilidade from '../../components/barraAcessibilidade/Acessibilidade';
import Rodape from '../../components/footer/Rodape';
import MenuEs from '../../components/menuLateral/MenuEs';
import MenuS from '../../components/menuSupe/MenuS';



class PerfilAdm extends Component {

    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: "",
            usuarios: [],
            admin: {}
        }
        this.BuscarAdm = this.BuscarAdm.bind(this);
        this.filtrarAdm = this.filtrarAdm.bind(this);
    }
        // Execulta o componente criado
        componentDidMount (){
            this.BuscarAdm ()
        }

        BuscarAdm(){
        console.log("teste");

        fetch('http://localhost:5000/api/Usuario', {
            headers: {
                "Content-Type" : "application/json" 
            }
        })

        // Execulta 
        .then(Response =>Response.json())
        .then(data => this.setState({usuarios: data}))
        .then(this.filtrarAdm)
        .catch(error => console.error(error));
    }

    filtrarAdm (){
        console.log(this.state.usuarios);

        this.state.usuarios.map(usuario => {
            if(usuario.idPermissao == 1){
                this.setState({admin: usuario})
                console.log(this.state.admin)
            }
        })
    }

    render() {
        return (
          
            <div className = "CorpoTodo">
                <Acessibilidade/>
                <MenuS/>
                
                    <div class="conteudoCentral">
                            <MenuEs/>
                        <div className="infoUser">
                            <section className="conteudo">

                                <h1> Perfil do Administrador </h1>
                                <div class="separador">
                                    <hr size="1" color="#D3D3D3"/>
                                </div>

                                <div id="info">

                                    <form id="box-form">
                                        <div id="form1">
                                            <label>Nome:</label>
                                            <input type="text" name="nome" value={this.state.admin.nome} className="nomeUser" placeholder=" Nome Completo" />

                                            <label>E-mail:</label>
                                            <input type="text" name="email" value={this.state.admin.email} className="cEmailUser"  placeholder="Seu Email" />

                                            <label>Senha:</label>
                                            <input type="text" name="senha" value={this.state.admin.senha} className="confSenha" placeholder="Sua senha" />
                                        </div>
                                    </form>
                                </div>
                            </section>
                            </div>
                        </div>
                        <Rodape/>
            </div>
        );
    }
}

export default PerfilAdm;