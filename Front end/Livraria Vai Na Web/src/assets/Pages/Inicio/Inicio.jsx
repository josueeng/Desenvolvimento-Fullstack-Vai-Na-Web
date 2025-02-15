import React from 'react'
import Header from '../../Components/Header/Header'
import I from './Inicio.module.scss'

import Banner from '../../Img/banner.png'
import Motivos from '../../Components/Motivos/Motivos.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
export default function Inicio() {
  return (
    <>
    <Header/>
    <main>
      <img className={I.ImgBanner} src={Banner} alt="" />
      <p className={I.TextBanner}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
    </main>
    <Motivos/>
    <Footer/>
    </>
  )
}
