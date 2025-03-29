import React, { useState } from "react";
import D from "./Doar.module.scss";

//importação de componentes
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

//importação de imagens
import livro from "../../assets/Img/livro.png";

export default function Doar() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    autor: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://bookregisterapi.onrender.com/doar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.Mensagem || "Livro cadastrado com sucesso!");
        setFormData({
          titulo: "",
          categoria: "",
          autor: "",
          image_url: "",
        });
      } else {
        const errorData = await response.json();
        alert(errorData.erro || "Erro ao cadastrar o livro.");
      }
    } catch (error) {
      alert("Erro ao conectar com a API.");
    }
  };

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
            <p className={D.Title}>Informações do Livro</p>
          </div>
          <div className={D.Inputs}>
            <input
              className={D.InputText}
              type="text"
              name="titulo"
              placeholder="Nome do Livro"
              value={formData.titulo}
              onChange={handleChange}
            />
            <input
              className={D.InputText}
              type="text"
              name="categoria"
              placeholder="Categoria do Livro"
              value={formData.categoria}
              onChange={handleChange}
            />
            <input
              className={D.InputText}
              type="text"
              name="autor"
              placeholder="Autor do Livro"
              value={formData.autor}
              onChange={handleChange}
            />
            <input
              className={D.InputText}
              type="text"
              name="image_url"
              placeholder="Link da imagem do Livro"
              value={formData.image_url}
              onChange={handleChange}
            />
          </div>
          <button className={D.BotDoar} onClick={handleSubmit}>
            Doar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
