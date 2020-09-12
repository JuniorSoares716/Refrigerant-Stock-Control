const connection = require('../database/connection');

module.exports = {

  async index(_, response) {
    const produtos = await connection('product').select('*');

    return response.json(produtos);
  },

  async create(request, response) {
    const { marca, litragem, tipo, quantidade, valor } = request.body;

    await connection('product').insert({
      marca,
      litragem,
      tipo,
      quantidade,
      valor
    });

    return response.json({ marca });
  },

  async delete(request, response) {

    const { id } = request.params;

    const produto_ID = await connection('product').where('id', id).delete();

    //console.log(produto_ID);

    if (produto_ID) {
      return response.status(204).send();
    } else {
      return response.status(401).json({ error: 'Produto não encontrado.' });
    }
  },

  async update(request, response) {
    const { marca, litragem, tipo, quantidade, valor } = request.body;
    const { id } = request.params;

    console.log(request.body);
    console.log(request.params);
    const produto_ID = await connection('product').where('id', id).update({
      marca,
      litragem,
      tipo,
      quantidade,
      valor
    }
    );

    //console.log(produto_ID)
    if (produto_ID) {
      return response.status(204).send();
    } else {
      return response.status(401).json({ error: 'Produto não encontrado.' });

    }

  }

};