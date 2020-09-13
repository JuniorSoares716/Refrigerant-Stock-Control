import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';


import './styles.css'

export default function Listagem() {

  const [produtos, setProdutos] = useState([]);



  api.get('listagem').then(resonse => {
    setProdutos(resonse.data);
  });


  return (
    <div>
      <div className="container">

        <div className="content">
          <Link to="/">
            <FiArrowLeft size={20} color="#000000" />
          </Link>
          <table>
            <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Litragem</th>
              <th>Tipo</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Ação</th>
            </tr>
            {produtos.map(produto => (
              <tr key={produto.id}>
                <td>{produto.id} </td>
                <td>{produto.marca}</td>
                <td>{produto.tipo}</td>
                <td>{produto.litragem}</td>
                <td>R${produto.valor}</td>
                <td>{produto.quantidade}</td>
                <td>Editar</td>

              </tr>
            ))}
          </table>
        </div>
      </div>

    </div>
  )
}
