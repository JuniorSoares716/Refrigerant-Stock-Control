import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

// import api from '../../services/api';

import './styles.css';
// import CadastroProduto from '../../assets/caadastroProduto.png';
import imgHome from '../../assets/cadastroProduto.png';
import api from '../../services/api';

export default function Cadastro() {


  const [marca, setMarca] = useState('');
  const [litragem, setLitragem] = useState('250mL');
  const [tipo, setTipo] = useState('Pet');
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState('');

  const litrageValue = [
    { id: 1, valor: '250mL' },
    { id: 2, valor: '600mL' },
    { id: 3, valor: '1L' },
  ];
  const tipoValue = [
    { id: 1, valor: 'Pet' },
    { id: 2, valor: 'Garrafa' },
    { id: 3, valor: 'Lata' },
  ]

  async function handleRegister(event) {
    event.preventDefault();
    const data = ({
      marca,
      litragem,
      tipo,
      quantidade,
      valor,

    });

    try {
      const resp = await api.post('cadastrar', data);

      alert(`Cadastro realizado ${resp.data.marca}`);

    } catch (error) {
      alert("Erro no cadastro");
    }
  }

  return (

    <div className="cadastro-produto">
      <div className="content">
        <section>
          <Link to="/">
            <FiArrowLeft size={20} color="#000000" />
          </Link>
          <h1>Cadastrar Refrigerante</h1>
          <div className="img-home">
            <img src={imgHome} alt="Refrigerante" />
          </div>

        </section>

        <form onSubmit={handleRegister}>

          <input placeholder="Marca" value={marca} onChange={e => setMarca(e.target.value)} />

          <select value={litragem} onChange={e => setLitragem(e.target.value)}>
            {litrageValue.map((item, index) => (
              <option key={item.id} value={item.valor}>{item.valor}</option>
            ))}

          </select>

          <select value={tipo} onChange={e => setTipo(e.target.value)}>
            {tipoValue.map((item, index) => (
              <option key={item.id} value={item.valor}>{item.valor}</option>
            ))}
          </select>

          <input placeholder="Quantidade" type="number" min="0" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
          <input placeholder="Valor R$" value={valor} onChange={e => setValor(e.target.value)} />

          <button type="submit" className="myButton">Cadastrar</button>
        </form>
      </div>

    </div>
  );
}
