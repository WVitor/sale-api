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
exports.FuncionalidadesController = void 0;
var FuncionalidadeRepository_1 = require("../repositories/FuncionalidadeRepository");
var FuncionalidadesController = /** @class */ (function () {
    function FuncionalidadesController() {
    }
    FuncionalidadesController.listarTodasFuncionalidades = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var funcionalidades, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, FuncionalidadeRepository_1.FuncionalidadeRepository.find()];
                    case 1:
                        funcionalidades = _a.sent();
                        return [2 /*return*/, res.status(200).json(funcionalidades)];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FuncionalidadesController.listarFuncionalidadePorId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var funcionalidadeId, funcionalidade, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        funcionalidadeId = req.params.id;
                        return [4 /*yield*/, FuncionalidadeRepository_1.FuncionalidadeRepository.findOneBy({ id: funcionalidadeId })];
                    case 1:
                        funcionalidade = _a.sent();
                        return [2 /*return*/, res.status(200).json(funcionalidade)];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FuncionalidadesController.registrarFuncionalidade = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome_1, url, nivel, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        _a = req.body, nome_1 = _a.nome, url = _a.url, nivel = _a.nivel;
                        if (!nome_1 || !url || !nivel) {
                            return [2 /*return*/, res.status(400).json({ error: "informe todos os parametros no body da requisição" })];
                        }
                        nome_1 = nome_1.toLowerCase().split(" ").join("-");
                        url = url.toLowerCase().split(" ").join("-");
                        nivel = parseInt(req.body.nivel);
                        if (url.substr(0, 1) != '/') {
                            url = "/".concat(url);
                            console.log(url);
                        }
                        return [4 /*yield*/, FuncionalidadeRepository_1.FuncionalidadeRepository.findOneBy({ nome: nome_1 })];
                    case 1:
                        //validação de nome
                        if (_b.sent()) {
                            return [2 /*return*/, res.status(400).json({ error: "Funcionalidade '".concat(nome_1, "' ja existe.") })];
                        }
                        return [4 /*yield*/, FuncionalidadeRepository_1.FuncionalidadeRepository.findOneBy({ url: url })];
                    case 2:
                        //validação de url
                        if (_b.sent()) {
                            return [2 /*return*/, res.status(400).json({ error: "A url '".concat(url, "' ja existe.") })];
                        }
                        return [4 /*yield*/, FuncionalidadeRepository_1.FuncionalidadeRepository.save({ nome: nome_1, url: url, nivel: nivel })];
                    case 3:
                        _b.sent();
                        req.session.save(function () {
                            res.status(200).json({ message: "Funcionalidade '".concat(nome_1, "' registrada com sucesso.") });
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FuncionalidadesController.removerFuncionalidade = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = req.body.id;
                        if (!id) {
                            return [2 /*return*/, res.status(400).json({ error: "informe todos os parâmetros no body da requisição" })];
                        }
                        return [4 /*yield*/, FuncionalidadeRepository_1.FuncionalidadeRepository.findOneBy({ id: id })];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, res.status(400).json({ error: "Funcionalidade não encontrada" })];
                        }
                        return [4 /*yield*/, FuncionalidadeRepository_1.FuncionalidadeRepository.delete({ id: id })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Funcionalidade deletada com sucesso." })];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return FuncionalidadesController;
}());
exports.FuncionalidadesController = FuncionalidadesController;
