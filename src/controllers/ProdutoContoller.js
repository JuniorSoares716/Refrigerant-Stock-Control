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

    if (produto_ID) {
      await connection('product').where('id', id).delete();
    } else {
      return response.status(401).json({ error: 'Produto não encontrado.' });
    }
    return response.status(204).send();
  },

};