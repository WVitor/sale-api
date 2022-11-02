"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
var BaixaRepository_1 = require("../repositories/BaixaRepository");
var ProdutoRepository_1 = require("../repositories/ProdutoRepository");
var moment = require("moment");
var otc = require("objects-to-csv");
var fs = require("fs");
var ProdutosController = /** @class */ (function () {
    function ProdutosController() {
    }
    ProdutosController.listarTodosProdutos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var produtos, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.find()];
                    case 1:
                        produtos = _a.sent();
                        return [2 /*return*/, res.status(200).json(produtos)];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProdutosController.listarProdutoPorId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var produtoId, produto, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        produtoId = req.params.id;
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.findOneBy({ id: produtoId })];
                    case 1:
                        produto = _a.sent();
                        return [2 /*return*/, res.status(200).json(produto)];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProdutosController.listarTodasBaixas = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var baixas, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.find()];
                    case 1:
                        baixas = _a.sent();
                        return [2 /*return*/, res.status(200).json(baixas)];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProdutosController.salvarProduto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, descricao, quantidade, produto, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, nome = _a.nome, descricao = _a.descricao, quantidade = _a.quantidade;
                        if (!nome || !descricao || !quantidade) {
                            return [2 /*return*/, res.status(400).json({ error: "informe todos os parametros no body da requisição" })];
                        }
                        produto = {
                            nome: nome,
                            codigo: nome.substr(0, 2).concat((Math.floor(Math.random() * (99999999 - 10000000) + 10000000))),
                            descricao: descricao,
                            quantidade: quantidade
                        };
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.findOneBy({ nome: nome })];
                    case 1:
                        //validacao se nome ja existe
                        if (_b.sent()) {
                            return [2 /*return*/, res.status(400).json({ error: "Produto com nome '".concat(nome, "' ja existe.") })];
                        }
                        //salvar
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.save(produto)];
                    case 2:
                        //salvar
                        _b.sent();
                        return [2 /*return*/, res.status(200).json({ message: "produto ".concat(produto.nome, " criado com sucesso.") })];
                    case 3:
                        error_4 = _b.sent();
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProdutosController.baixaProduto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, produto, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        id = req.body.id;
                        if (!id) {
                            return [2 /*return*/, res.status(400).json({ error: "informe todos os parametros no body da requisição" })];
                        }
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.findOneBy({ id: id })];
                    case 1:
                        produto = _a.sent();
                        if (!produto) {
                            return [2 /*return*/, res.status(400).json({ error: "Produto com id '".concat(id, "' n\u00E3o encontrado.") })];
                        }
                        return [4 /*yield*/, BaixaRepository_1.BaixaRepository.save({ codigo: produto.codigo })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.delete(produto)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "O produto ".concat(produto.codigo, " foi recebeu baixa com sucesso.") })];
                    case 4:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProdutosController.removerProduto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, produto, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = req.body.id;
                        if (!id) {
                            return [2 /*return*/, res.status(400).json({ error: "informe todos os parametros no body da requisição" })];
                        }
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.findOneBy({ id: id })];
                    case 1:
                        produto = _a.sent();
                        if (!produto) {
                            return [2 /*return*/, res.status(400).json({ error: "Produto com id '".concat(id, "' n\u00E3o encontrado.") })];
                        }
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.delete(produto)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "O produto ".concat(produto.codigo, " foi deletado com sucesso.") })];
                    case 3:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProdutosController.editarProduto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, nome, descricao, quantidade, produto, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, id = _a.id, nome = _a.nome, descricao = _a.descricao, quantidade = _a.quantidade;
                        if (!id || !nome || !descricao || !quantidade) {
                            return [2 /*return*/, res.status(400).json({ error: "informe todos os parametros no body da requisição" })];
                        }
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.findOneBy({ id: id })];
                    case 1:
                        produto = _b.sent();
                        if (!produto) {
                            res.status(400).json({ error: "Produto com id '".concat(id, "' n\u00E3o encontrado.") });
                        }
                        produto.nome = nome;
                        produto.descricao = descricao;
                        produto.quantidade = quantidade;
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.save(produto)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json({ message: "O produto '".concat(produto.codigo, "' foi editado com sucesso.") })];
                    case 3:
                        error_7 = _b.sent();
                        console.log(error_7);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProdutosController.exportarPlanilha = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var produtos, csv, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, ProdutoRepository_1.ProdutoRepository.planilhaData()];
                    case 1:
                        produtos = _a.sent();
                        csv = new otc(produtos);
                        return [4 /*yield*/, csv.toDisk("".concat(__dirname, "/../../public/Planilha-").concat(moment().format("DD-MM-YYYY"), ".csv"))];
                    case 2:
                        _a.sent();
                        res.download("".concat(__dirname, "/../../public/Planilha-").concat(moment().format("DD-MM-YYYY"), ".csv"));
                        fs.rm("".concat(__dirname, "/../../public/Planilha-").concat(moment().format("DD-MM-YYYY"), ".csv"), function (err) {
                            if (err) {
                                console.log(err);
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProdutosController;
}());
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=ProdutoController.js.map