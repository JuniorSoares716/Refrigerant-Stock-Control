import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api';

import BootstrapTable from 'react-bootstrap-table-next';
import Pagination from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap'
import './styles.css';

export default function Listar() {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProdutos = async () => {
    try {
      const data = await api.get('listagem');
      console.log(data);
      setProdutos(data.data);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    { dataField: "marca", text: "Marca" },
    { dataField: "litragem", text: "Litragem" },
    { dataField: "tipo", text: "Tipo" },
    { dataField: "quantidade", text: "Quantidade" },
    { dataField: "valor", text: "Valor" },

  ]
  useEffect(() => {
    getProdutos();
  }, []);

  return (

    <div className="containe-list">
      <Link to="/">
        <FiArrowLeft size={20} color="#000000" className="home" />
      </Link>
      {loading ? (
        <div className="content-list">
          <BootstrapTable
            keyField="name"
            data={produtos}
            columns={columns}
            pagination={Pagination()}
          /></div>
      ) : (
          < div className="loading">
            <ReactBootStrap.Spinner animation="border" />
          </ div>)}


    </div>
  )
}
