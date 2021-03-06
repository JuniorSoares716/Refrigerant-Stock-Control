const express = require('express');
const ProdutoController = require('./controllers/ProdutoContoller');
const routes = express.Router();


routes.get('/listagem', ProdutoController.index);
routes.post('/cadastrar', ProdutoController.create);
routes.delete('/produto/delete/:id', ProdutoController.delete);
routes.put('/produto/update/:id', ProdutoController.update);


module.exports = routes;






