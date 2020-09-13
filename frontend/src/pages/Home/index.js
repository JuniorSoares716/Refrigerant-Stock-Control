import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';


import './styles.css';

import imgHome from '../../assets/imgHome.png';


export default function Home() {

  return (
    <div className="container">
      <form>
        <h1 className="title">Controle de Estoque</h1>
        <h3 className="subtitle">Sistema para controle de estoque de Refrigerante da empresa.</h3>
        <div className="buttons">

          <Link to="/cadastro" className="myButton" >Cadastrar Produto</Link>
          <Link to="/listagem" className="myButton" >Listar produtos</Link>
        </div>

      </form>
      <div className="img-home">
        <img src={imgHome} alt="Refrigerante" />
      </div>
    </div>
  )
}