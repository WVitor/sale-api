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
var FuncionalidadeRepository_1 = require("../repositories/FuncionalidadeRepository");
var TipoUsuarioRepository_1 = require("../repositories/TipoUsuarioRepository");
var UsuarioRepository_1 = require("../repositories/UsuarioRepository");
var bcrypt = require('bcryptjs');
var Master = function (master, email) { return __awaiter(void 0, void 0, void 0, function () {
    var tipoUsuario, funcionalidades, usuario, salt, pwd;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, TipoUsuarioRepository_1.TipoUsuarioRepository.findOneByMaster(master)];
            case 1:
                tipoUsuario = _a.sent();
                return [4 /*yield*/, FuncionalidadeRepository_1.FuncionalidadeRepository.find()];
            case 2:
                funcionalidades = _a.sent();
                if (!!tipoUsuario) return [3 /*break*/, 4];
                return [4 /*yield*/, TipoUsuarioRepository_1.TipoUsuarioRepository.save({ nome: master, nivel: 3 })];
            case 3:
                tipoUsuario = _a.sent();
                _a.label = 4;
            case 4:
                if (!(tipoUsuario.funcionalidades == null || tipoUsuario.funcionalidades.length < funcionalidades.length)) return [3 /*break*/, 6];
                tipoUsuario.funcionalidades = funcionalidades;
                return [4 /*yield*/, TipoUsuarioRepository_1.TipoUsuarioRepository.save(tipoUsuario)];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [4 /*yield*/, UsuarioRepository_1.UsuarioRepository.findOneBy({ email: email })];
            case 7:
                usuario = _a.sent();
                if (!!usuario) return [3 /*break*/, 9];
                salt = bcrypt.genSaltSync(10);
                pwd = bcrypt.hashSync(process.env.ADMIN_PWD, salt);
                return [4 /*yield*/, UsuarioRepository_1.UsuarioRepository.save({ nome: master, email: email, password: pwd, tipo: tipoUsuario })];
            case 8:
                usuario = _a.sent();
                _a.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); };
module.exports = Master;
//# sourceMappingURL=master.js.map