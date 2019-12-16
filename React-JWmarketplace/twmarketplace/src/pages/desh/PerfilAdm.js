import React, { Component } from 'react';
import '../../assets/style/PerfilAdm.css';

import Acessibilidade from '../../components/barraAcessibilidade/Acessibilidade';
import Rodape from '../../components/footer/Rodape';
import MenuS from '../../components/menuSupe/MenuS';
import MenuLateralD from '../../components/menudash/MenuLEs';



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
            <div>
                <Acessibilidade/>
                <MenuS/>
                <MenuLateralD/>
                <div className="infoUser">
                        <div id="info">
                            <form id="box-form">
                                <div id="form1">
                                    <label>Nome:</label>
                                    <input type="text" name="nomeCompleto" className="nomeUser" placeholder=" Nome Completo"/> 
                                    
                                    <label>Alterar E-mail:</label>
                                    <input type="text" name="alterEmail" className="emailUser" placeholder=" Insira uma nova senha"/>
                
                                    <label>Confirme seu E-mail:</label>
                                    <input type="text" name="alterConfEmail" className="cEmailUser" placeholder=" Confirme  sua senha"/>
                                </div>
                                
                                <div id="form2">
                                                                    
                                    <label id="idEmail">Alterar Senha:</label>
                                    <input type="text" name="senhaUser" className="alterarSenha" placeholder=" Insira um novo e-mail"/>
                                    
                                    <label id="idConfEmail">Confirme sua Senha:</label>
                                    <input type="text" name="confirsenha" className="confSenha" placeholder=" Confirme seu e-mail"/>
                                    
                                    <div className="botaofinal">
                                        <button className="btnFinal"><p>Atualizar</p></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    <Rodape/>
                </div> 
            </div>   
        );
    }
}    

export default PerfilAdm;