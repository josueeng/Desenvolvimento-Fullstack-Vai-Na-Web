import React from "react";

import Comunidade from "../../assets/Img/Comunidade.png";
import leitura from "../../assets/Img/leitura.png";
import uniao from "../../assets/Img/uniao.png";
import balanca from "../../assets/Img/balanca.png";
import M from "./Motivos.module.scss";

export default function Motivos() {
  return (
    <div className={M.ContMot}>
      <p className={M.TextPrinc}>Por que devo doar?</p>
      <div className={M.Motivos}>
        <div className={M.Motivo}> 
        <img className={M.ImgMotivo} src={Comunidade} alt="" />
        <p className={M.TextMotivo}> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </div>
        <div className={M.Motivo}> 
        <img className={M.ImgMotivo} src={leitura} alt="" />
        <p className={M.TextMotivo}> Estimula o hábito da leitura e o aprendizado contínuo.</p>
        </div>
        <div className={M.Motivo}> 
        <img className={M.ImgMotivo} src={uniao} alt="" />
        <p className={M.TextMotivo}> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </div>
        <div className={M.Motivo}> 
        <img className={M.ImgMotivo} src={balanca} alt="" />
        <p className={M.TextMotivo}>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </div>
      </div>
    </div>
  );
}
