import React from 'react';
import '../assets/PagesHtml/HOME/CSS/style.css';

import logo from '../assets/imagens/logo1.png';

function Rodape () {
    return (
      <>
        <hr className="hrHome"/>
        <footer className="footerHome">
            <img className="logo_thw" src={logo} alt="Imagem do Logo da ThougthWorks"/>
            <p className="texto_rodape">
                ThougthWorks MarketPlace © 2019 - Todos os direitos reservados - TWmarketplace.com.br atividades de internet
                LTDA <br/> CNPJ: 99.999.999/9999-99
                Rua dos Alfineiros, 4, Surrey, Londres, 99999-999 - (11) 9999-9999
            </p>
        </footer>
      </>
    );
}
export default Rodape;