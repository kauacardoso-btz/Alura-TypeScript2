"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PetController_1 = __importDefault(require("../controller/PetController"));
var PetRepository_1 = __importDefault(require("../repositories/PetRepository"));
var dataSource_1 = require("../config/dataSource");
var router = express_1.default.Router();
var petRepository = new PetRepository_1.default(dataSource_1.AppDataSource.getRepository("PetEntity"), dataSource_1.AppDataSource.getRepository("AdotanteEntity"));
var petController = new PetController_1.default(petRepository);
router.post("/", function (req, res) { return petController.criaPet(req, res); });
router.get("/", function (req, res) { return petController.listaPet(req, res); });
router.put("/:id", function (req, res) { return petController.atualizaPet(req, res); });
router.delete("/:id", function (req, res) { return petController.deletaPet(req, res); });
router.put("/:pet_id/:adotante_id", function (req, res) {
    return petController.adotaPet(req, res);
});
router.get("/filtro", function (req, res) {
    return petController.buscaPetPorCampoGenerico(req, res);
});
exports.default = router;
