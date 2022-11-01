"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtosRoutes = void 0;
var Express = require("express");
var ProdutoController_1 = require("../controllers/ProdutoController");
var checkAuth = require('../modules/tokenValidation').checkAuth;
exports.produtosRoutes = Express.Router();
exports.produtosRoutes.get('/produtos', checkAuth, ProdutoController_1.ProdutosController.listarTodosProdutos);
exports.produtosRoutes.get('/produtos/:id', checkAuth, ProdutoController_1.ProdutosController.listarProdutoPorId);
exports.produtosRoutes.get('/baixas', checkAuth, ProdutoController_1.ProdutosController.listarTodasBaixas);
exports.produtosRoutes.post('/salvar-produto', checkAuth, ProdutoController_1.ProdutosController.salvarProduto);
exports.produtosRoutes.post('/editar-produto', checkAuth, ProdutoController_1.ProdutosController.editarProduto);
exports.produtosRoutes.post('/baixa-produto', checkAuth, ProdutoController_1.ProdutosController.baixaProduto);
exports.produtosRoutes.post('/remover-produto', checkAuth, ProdutoController_1.ProdutosController.removerProduto);
exports.produtosRoutes.post('/arquivos/planilha', checkAuth, ProdutoController_1.ProdutosController.exportarPlanilha);
//# sourceMappingURL=produtosRoutes.js.map