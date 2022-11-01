"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepository = void 0;
var Produto_1 = require("../entity/Produto");
var data_source_1 = require("../dao/data-source");
exports.ProdutoRepository = data_source_1.AppDataSource.getRepository(Produto_1.Produto).extend({});
//# sourceMappingURL=ProdutoRepository.js.map