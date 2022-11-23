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
exports.AutenticacaoController = void 0;
var UsuarioRepository_1 = require("../repositories/UsuarioRepository");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var cripto = require('crypto');
var mailer = require('../modules/mailer');
var AutenticacaoController = /** @class */ (function () {
    function AutenticacaoController() {
    }
    AutenticacaoController.entrar = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, usuario_1, validarSenha, token_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, email = _a.email, password = _a.password;
                        if (!email || !password) {
                            return [2 /*return*/, res.status(400).json({ error: "informe todos os parametros no body da requisição" })];
                        }
                        return [4 /*yield*/, UsuarioRepository_1.UsuarioRepository.findOne({
                                select: { id: true, nome: true, password: true, email: true, tipo: { id: true, nome: true, nivel: true, funcionalidades: { id: true, nome: true, nivel: true, url: true } } },
                                relations: { tipo: { funcionalidades: true }, },
                                where: { email: email }
                            })];
                    case 1:
                        usuario_1 = _b.sent();
                        if (!usuario_1) {
                            return [2 /*return*/, res.status(400).json({ error: 'Usuário não encontrado.' })];
                        }
                        validarSenha = bcrypt.compareSync(password, usuario_1.password);
                        if (!validarSenha) {
                            return [2 /*return*/, res.status(400).json({ error: 'Senha incorreta.' })];
                        }
                        token_1 = jwt.sign({ userId: usuario_1.id }, process.env.SECRET, { expiresIn: 120 });
                        req.session["token"] = token_1;
                        req.session.save(function () {
                            return res.status(200).json({ message: "Usuario ".concat(usuario_1.nome, " logado com sucesso"), token: token_1, usuario: usuario_1 });
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AutenticacaoController.sair = function (req, res) {
        req.session.destroy();
        return res.status(200).json({ message: 'Até logo.' });
    };
    AutenticacaoController.esqueceuSenha = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var email, usuario, token, now, context, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        email = req.body.email;
                        return [4 /*yield*/, UsuarioRepository_1.UsuarioRepository.findOneBy({ email: email })
                            //validacao de email
                        ];
                    case 1:
                        usuario = _a.sent();
                        //validacao de email
                        if (!usuario) {
                            res.status(200).json({ message: 'Não existe um usuário cadastrado com esse email.' });
                            return [2 /*return*/];
                        }
                        token = cripto.randomBytes(20).toString('hex');
                        now = new Date();
                        now.setHours(now.getHours() + 1);
                        usuario.passwordResetToken = token;
                        usuario.passwordResetExpires = now;
                        return [4 /*yield*/, UsuarioRepository_1.UsuarioRepository.save(usuario)
                            //configuracoes de envio de email
                        ];
                    case 2:
                        _a.sent();
                        context = "";
                        if (req.hostname == 'localhost') {
                            context = "http://".concat(req.hostname, ":3000/redefinir-senha?token=").concat(token);
                        }
                        else {
                            context = "https://".concat(req.hostname, "/redefinir-senha?token=").concat(token);
                        }
                        return [4 /*yield*/, mailer.sendMail({
                                to: email,
                                from: process.env.PROJECT_EMAIL,
                                template: 'mailer/emailTemplate',
                                context: { context: context }
                            }, function (err) { if (err) {
                                console.log(err);
                            } return; })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "enviado com sucesso" })];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AutenticacaoController.redefinirSenha = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, pwd, confirmpwd, passwordResetToken, usuario, now, salt, hashedPwd, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, pwd = _a.pwd, confirmpwd = _a.confirmpwd;
                        passwordResetToken = req.query.token;
                        if (!pwd || !confirmpwd) {
                            return [2 /*return*/, res.status(400).json({ error: "informe todos os parametros no body da requisição" })];
                        }
                        return [4 /*yield*/, UsuarioRepository_1.UsuarioRepository.findOneBy({ passwordResetToken: passwordResetToken })
                            //validacao de token
                        ];
                    case 1:
                        usuario = _b.sent();
                        //validacao de token
                        if (!usuario) {
                            return [2 /*return*/, res.status(400).json({ error: "Token invalido." })];
                        }
                        now = new Date();
                        if (now > usuario.passwordResetExpires) {
                            return [2 /*return*/, res.status(400).json({ error: "Token expirado." })];
                        }
                        //validacao de senha
                        if (pwd != confirmpwd) {
                            return [2 /*return*/, res.status(400).json({ error: "Senhas não conferem." })];
                        }
                        salt = bcrypt.genSaltSync(10);
                        hashedPwd = bcrypt.hashSync(pwd, salt);
                        //salvar senha
                        usuario.password = hashedPwd;
                        return [4 /*yield*/, UsuarioRepository_1.UsuarioRepository.save(usuario)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, res.status(400).json({ message: "Senha redefinida com sucesso." })];
                    case 3:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AutenticacaoController.tokenValidacao = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                token = req.session['token'];
                jwt.verify(token, process.env.SECRET, function (err, decoded) {
                    if (err) {
                        return res.status(400).json({ error: 'token expirado' });
                    }
                    else {
                        return res.status(200).json({ message: 'token validado' });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    return AutenticacaoController;
}());
exports.AutenticacaoController = AutenticacaoController;
