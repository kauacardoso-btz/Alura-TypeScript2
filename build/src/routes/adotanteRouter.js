"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dataSource_1 = require("../config/dataSource");
var AdotanteController_1 = __importDefault(require("../controller/AdotanteController"));
var AdotanteRepository_1 = __importDefault(require("../repositories/AdotanteRepository"));
var router = express_1.default.Router();
var adotanteRepository = new AdotanteRepository_1.default(dataSource_1.AppDataSource.getRepository("AdotanteEntity"));
var adotanteController = new AdotanteController_1.default(adotanteRepository);
router.post("/", function (req, res) { return adotanteController.criaAdotante(req, res); });
router.get("/", function (req, res) { return adotanteController.listaAdotantes(req, res); });
router.put("/:id", function (req, res) { return adotanteController.atualizaAdotante(req, res); });
router.delete("/:id", function (req, res) {
    return adotanteController.deletaAdotante(req, res);
});
router.patch("/:id", function (req, res) {
    return adotanteController.atualizaEnderecoAdotante(req, res);
});
exports.default = router;
