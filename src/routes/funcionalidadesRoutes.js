"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionalidadesRoutes = void 0;
var Express = require("express");
var FuncionalidadesController_1 = require("../controllers/FuncionalidadesController");
var checkAuth = require('../modules/tokenValidation').checkAuth;
exports.funcionalidadesRoutes = Express.Router();
exports.funcionalidadesRoutes.get('/funcionalidades', checkAuth, FuncionalidadesController_1.FuncionalidadesController.listarTodasFuncionalidades);
exports.funcionalidadesRoutes.get('/funcionalidades/:id', checkAuth, FuncionalidadesController_1.FuncionalidadesController.listarFuncionalidadePorId);
exports.funcionalidadesRoutes.post('/registrar-funcionalidade', checkAuth, FuncionalidadesController_1.FuncionalidadesController.registrarFuncionalidade);
exports.funcionalidadesRoutes.post('/remover-funcionalidade', checkAuth, FuncionalidadesController_1.FuncionalidadesController.removerFuncionalidade);
//# sourceMappingURL=funcionalidadesRoutes.js.map