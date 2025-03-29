import React from "react";
import F from  "./Footer.module.scss";

import Facebook from "../../assets/Img/facebook.png";
import Instagram from "../../assets/Img/instagram.png";
import Twitter from "../../assets/Img/twiter.png";
import Youtube from "../../assets/Img/youtube.png";
import Linkedin from "../../assets/Img/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <div className={F.FooterTop}>
        <p className={F.Number}>4002-8922</p>
        <div className={F.Redes}>
          <img src={Facebook} alt="" className={F.Rede} />
          <img src={Instagram} alt="" className={F.Rede} />
          <img src={Twitter} alt="" className={F.Rede} />
          <img src={Youtube} alt="" className={F.Rede} />
          <img src={Linkedin} alt="" className={F.Rede} />
        </div>
      </div>
      <div className={F.FooterBot}>
        <p className={F.Text}>© Layout desenvolvido pela Vai Na Web para fins educativos - 2024 | Josué G. Lopes</p>
      </div>
    </footer>
  );
}