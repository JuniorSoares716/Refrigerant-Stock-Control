import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertOctagon } from 'react-icons/fi';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalTitle, FormGroup, ModalFooter } from 'react-bootstrap'


import './styles.css'

export default function Listagem() {

  const [produtos, setProdutos] = useState([]);


  async function handleDeleteProduto(id) {
    try {
      await api.delete(`produto/delete/${id}`);
    } catch (error) {
      alert('Produto não excluido');
    }
  }

  api.get('listagem').then(resonse => {
    setProdutos(resonse.data);
  });

  return (
    <>
      <Container className="container-list">
        <Link to="/cadastro" className="btn btn-primary novoCadastro" >Cadastrar</Link>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Litragem</th>
              <th>Tipo</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto => (
              <tr key={produto.id}>
                <td>{produto.id} </td>
                <td>{produto.marca}</td>
                <td>{produto.tipo}</td>
                <td>{produto.litragem}</td>
                <td>R$ {produto.valor}</td>
                <td>{produto.quantidade}</td>
                <td>
                  <Button className="btn btn-warning">Editar </Button>{' '}
                  <Button onClick={() => handleDeleteProduto(produto.id)} className="btn btn-danger">Excluir </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>


    </>
  )
}
