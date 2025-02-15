import React from "react";
import D from "./Doar.module.scss";

//importação de componentes
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

//importação de imagens
import livro from "../../Img/livro.png";
export default function Doar() {
  return (
    <>
      <Header />
      <div className={D.ContPrin}>
        <p className={D.TextPrin}>
          Por favor, Preencha o formulário com suas informações e as informações
          do Livro
        </p>
        <div className={D.FormLivros}>
          <div className={D.FormTitle}>
            <img src={livro} alt="" />
            <p className={D.Title}>Informações do Livro
            </p>
            
          </div>
          <div className={D.Inputs}>
              <input className={D.InputText} type="text" placeholder="Nome do Livro" />
              <input className={D.InputText} type="text" placeholder="Categoria do Livro" />
              <input className={D.InputText} type="text" placeholder="Autor do Livro" />
              <input className={D.InputText} type="text" placeholder="Link da imagem do Livro" />
              
            </div>
            <button className={D.BotDoar}>Doar</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
