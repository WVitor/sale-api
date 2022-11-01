"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUsuarioRoutes = void 0;
var Express = require("express");
var TipoUsuarioController_1 = require("../controllers/TipoUsuarioController");
var checkAuth = require('../modules/tokenValidation').checkAuth;
exports.tipoUsuarioRoutes = Express.Router();
exports.tipoUsuarioRoutes.get('/tipos-usuarios', checkAuth, TipoUsuarioController_1.TipoUsuarioController.listarTodosTiposUsuarios);
exports.tipoUsuarioRoutes.get('/tipos-usuarios/:id', checkAuth, TipoUsuarioController_1.TipoUsuarioController.listarTipoUsuarioPorId);
exports.tipoUsuarioRoutes.post('/registrar-funcionalidade', checkAuth, TipoUsuarioController_1.TipoUsuarioController.registrarTipoUsuario);
exports.tipoUsuarioRoutes.post('/remover-funcionalidade', checkAuth, TipoUsuarioController_1.TipoUsuarioController.removerTipoUsuario);
//# sourceMappingURL=tipoUsuarioRoutes.js.map