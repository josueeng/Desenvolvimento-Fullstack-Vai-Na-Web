import React from 'react'
import L from './Livros.module.scss'

import Header from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Prota from '../../Img/Prota.png'
export default function () {
  return (
    
    <>
    <Header/>
    <div className={L.ContPrinc}>
      <div className={L.ContLi}>
        <img src={Prota} alt="" />
        <div className={L.LivroDet}>
          <p className={ L.TextLiv}>O protagonista</p>
          <p className={ L.TextLiv}>Susanne Andrade</p>
          <p className={ L.TextLiv}>Ficção</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
