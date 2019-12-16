import React, { Component } from 'react';
import '../../assets/PagesHtml/HOME/CSS/style.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import CarouselPage from '../../Componentes/Carrossel';


class Home extends Component {
    render() {
      return <>
      <Menu />
      <main id="home_main">
        <div id= "banner">
            <CarouselPage/>
        </div>
        {/* <!--Fim home_banner--> */}
        <hr className="hr"/>
  
        <section id="img1">
        {/* <!--Seção img1 = uma area do site onde os produtos podem ser classificados/ Local onde ficaram os produtos divididos (ex. fotos de varios notebooks)--> */}
            <nav className="filtro">
                    <h2>Notebooks</h2>
                    <ul>
                        <li><a href="#">Marca ></a></li>
                        <li><a href="#">Condição ></a></li>
                    </ul>
            </nav>
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <a href="../Editado-Tw/DescriçaoProduto.html"><img src="../imagens/note1.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src="../imagens/note2.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src="../imagens/note3.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src="../imagens/note6.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src="../imagens/note4.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">   
                        <a href="#"> <img src="../imagens/note5.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>             
                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <a href="#"><img src="../imagens/note3.jpg" alt=""/></a>
                    <span className="valor_Maior">R$000</span>
                </div>  
            </div>
              <a href="#" className="botao">Ver mais >>></a>
        </section>
        {/* <!--Fim img1--> */}
        <hr className="hr"/>
  
        <section id="img2">
        {/* <!--Seção img2 = uma area do site onde os produtos podem ser classificados/ Local onde ficaram os produtos divididos (ex. fotos de varios smartphones)--> */}
            <nav className="filtro">
                <h2>Smartphones</h2>
                <ul>
                    <li><a href="#">Marca ></a></li>
                    <li><a href="#">Condição ></a></li>
                </ul>
            </nav>
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <a href="../Editado-Tw/DescriçaoProduto.html"><img src="../imagens/phone7.jpg" alt="" /></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src="../imagens/phone7.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src="../imagens/phone6.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src="../imagens/phone5.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">
                        <a href="#"><img src="../imagens/phone4.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>
                    <div className="grid">   
                        <a href="#"> <img src="../imagens/phone3.jpg" alt=""/></a>
                        <span className="valor">R$000</span>
                    </div>             
                </div>
                {/* <!--Fim container--> */}
                    <div className="grid-8">    
                    <a href="#"><img src="../imagens/phone2.jpg" alt=""/></a>
                    <span className="valor_Maior">R$000</span>
                </div>  
            </div>
                <a href="#" className="botao">Ver mais >>></a>
        </section>
        {/* <!--Fim img2--> */}
    </main>
    <Rodape/>
    </>
    }
  }
  
  export default Home;
  