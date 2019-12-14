import React from 'react';
import '../../assets/components/MenuDash.css';

function MenuLateralD (){
    return(
        <div>
            <aside id="menuDash">
                
                <div className="fixoMenu1">Navegação</div>

                    <div  className="mfc">
                        <button>Perfil</button>
                    </div>

                    <div className="mfc">
                        <button >Produtos</button>
                    </div>

                    <div className="mfc">
                        <button>Notificações</button>
                    </div>

                    <div className="mfc">
                        <button>Interessados</button>
                    </div>

                <div className="fixoMenu1">Usuários</div>

                    <div className="mfc">
                        <button>Novos cadastros</button>
                    </div>

                    <div className="mfc">
                        <button>Lista Usuários</button>
                    </div>

            </aside>
        </div>
    );
}

export default MenuLateralD;