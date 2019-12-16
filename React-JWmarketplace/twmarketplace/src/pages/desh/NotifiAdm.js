import React, {Component} from 'react';
import '../../assets/style/NotificaAdm.css'

import Acessibilidade from '../../components/barraAcessibilidade/Acessibilidade';
import MenuS from '../../components/menuSupe/MenuS';
import MenuLateralD from '../../components/menudash/MenuLEs';

class NotificaAdm extends Component{
    render (){
        return(
            <div>
                <Acessibilidade/>
                <MenuS/>
                <MenuLateralD/>
            
                <section id="lateral_direita">
                    <div class="topo_direito">
                        <h1>Lista de Usuarios Cadastrados</h1>
                    </div>
                    <div class="canto_direito">
                        <ul>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                            <li><a href="#">> Carlos Vieira Santos - ID: 23387432784732</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default NotificaAdm;  