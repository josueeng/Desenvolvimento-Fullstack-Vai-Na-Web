import React, { useEffect, useState } from 'react';
import L from './Livros.module.scss';

import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

export default function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch('https://bookregisterapi.onrender.com/livros');
        if (response.ok) {
          const data = await response.json();
          setLivros(data);
        } else {
          alert('Erro ao buscar os livros.');
        }
      } catch (error) {
        alert('Erro ao conectar com a API.');
      }
    };

    fetchLivros();
  }, []);

  return (
    <>
      <Header />
      <div className={L.ContPrinc}>
        {livros.length > 0 ? (
          livros.map((livro) => (
            <div key={livro.id} className={L.ContLi}>
              <img src={livro.image_url} alt={livro.titulo} />
              <div className={L.LivroDet}>
                <p className={L.TextLiv}>{livro.titulo}</p>
                <p className={L.TextLiv}>{livro.autor}</p>
                <p className={L.TextLiv}>{livro.categoria}</p>
              </div>
            </div>
          ))
        ) : (
          <p className={L.TextLiv}>Nenhum livro encontrado.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
