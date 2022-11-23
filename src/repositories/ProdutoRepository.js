"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepository = void 0;
var Produto_1 = require("../entity/Produto");
var data_source_1 = require("../dao/data-source");
var moment = require("moment");
exports.ProdutoRepository = data_source_1.AppDataSource.getRepository(Produto_1.Produto).extend({
    planilhaData: function () {
        return exports.ProdutoRepository.createQueryBuilder("produto")
            .where("produto.created_at >= :dataI", { dataI: moment().subtract(3, 'months').format("YYYY-MM-DD hh:mm:ss") })
            .select(["produto.codigo", "produto.nome", "produto.descricao", "produto.quantidade"])
            .getMany();
    },
});
