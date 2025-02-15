import React from "react";
import { Link } from "react-router-dom";

import H from "./Header.module.scss";
import Logo from "../../img/logo.png";
import Lupa from "../../img/search.png";

export default function Header() {
  return (
    <>
      <div className={H.header}>
        <div className={H.Logo}>
          <img src={Logo} alt="Logo da Livraria Em png" />
          <p className={H.TextLogo}>Livraria Vai na Web</p>
        </div>
        <nav className={H.Menu}>
          <Link className={H.TextMenu} to="/">
            Inicio
          </Link>

          <Link className={H.TextMenu} to="/doar">
          Quero doar
          </Link>
          <Link className={H.TextMenu} to="/Livros">
          Livros doados
          </Link>
        </nav>
        <div className={H.ContPesq}>
          <input placeholder="  O que você procura  ?" className={H.InputPesquisar} type="text" />
          <img className={H.LupaPesqu} src={Lupa} alt=" Lupa de pesquisa em png" />
        </div>
      </div>
    </>
  );
}
