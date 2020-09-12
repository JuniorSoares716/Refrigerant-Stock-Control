import React, { Component } from 'react';

import './styles.css';
// import CadastroProduto from '../../assets/caadastroProduto.png';
import imgHome from '../../assets/cadastroProduto.png';

export default class Cadastro extends Component {
  render() {
    return (
      <div className="cadastro-produto">
        <div className="content">
          <section>
            <div className="img-home">
              <img src={imgHome} alt="Refrigerante" />
            </div>
          </section>

          <form>
            {/* <label>Marca:</label> */}
            <input placeholder="Marca" />

            {/* <label>Litragem:</label> */}
            <select id="Litragem" name="litragem">
              <option value="250mL">250mL</option>
              <option value="600mL">600mL</option>
              <option value="1L">1L</option>
            </select>

            {/* <label>Tipo:</label> */}
            <select id="Litragem" name="litragem">
              <option value="Pet">Pet</option>
              <option value="Garrafa">Garrafa</option>
              <option value="Lata">Lata</option>
            </select>

            <input placeholder="Quantidade" type="number" />
            <input placeholder="Valor R$" />

            <button className="myButton">Cadastrar</button>
          </form>
        </div>

      </div>
    )
  }
}
