import React from 'react';
import '../../assets/components/Rodape.css';
import '../../assets/img/logor.png'

function Rodape () {
    return (
        <div>
            <hr className="hrHome" />
            <footer className="footerHome">
                <img className="logo_thw" src= {require("../../assets/img/logor.png")} alt="Imagem do Logo da ThougthWorks"/>
                <p className="texto_rodape">
                    ThougthWorks MarketPlace © 2019 - Todos os direitos reservados - TWmarketplace.com.br atividades de internet
                    LTDA <br/> CNPJ: 99.999.999/9999-99
                    Rua dos Alfineiros, 4, Surrey, Londres, 99999-999 - (11) 9999-9999 <br/> Entre em contato com o ADMINISTRADOR: Email - carlos.eduardo@live.com.
                </p>
            </footer>

        </div>
    );
}

export default Rodape;