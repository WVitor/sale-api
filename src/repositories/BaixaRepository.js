"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaixaRepository = void 0;
var Baixa_1 = require("../entity/Baixa");
var data_source_1 = require("../dao/data-source");
exports.BaixaRepository = data_source_1.AppDataSource.getRepository(Baixa_1.Baixa).extend({});
