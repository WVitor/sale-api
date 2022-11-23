"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRoutes = void 0;
var Express = require("express");
var UsuarioController_1 = require("../controllers/UsuarioController");
var _a = require('../modules/tokenValidation'), checkAuth = _a.checkAuth, tokenValidation = _a.tokenValidation;
exports.usuarioRoutes = Express.Router();
exports.usuarioRoutes.get('/usuarios', UsuarioController_1.UsuarioController.listarTodosUsuarios);
exports.usuarioRoutes.get('/usuarios/:id', UsuarioController_1.UsuarioController.listarUsuarioPorId);
