import express, { RequestHandler } from "express";
import { AppDataSource } from "../config/dataSource";
import AbrigoController from "../controller/AbrigoController";
import AbrigoRepository from "../repositories/AbrigoRepository";
import { verificaIdMiddleware } from "../middleware/verificaId";
import { middlewareValidadorBodyEndereco } from "../middleware/validadores/enderecoRequestBody";

const router = express.Router();
const abrigoRepository = new AbrigoRepository(
    AppDataSource.getRepository("AbrigoEntity")
);
const abrigoController = new AbrigoController(abrigoRepository);
const validateBodyEndereco: RequestHandler = (req, res, next) =>
    middlewareValidadorBodyEndereco(req, res, next);

router.post("/", (req, res) => abrigoController.criaAbrigo(req, res));

router.get("/", (req, res) => abrigoController.listaAbrigos(req, res));

router.put("/:id", verificaIdMiddleware, (req, res) => abrigoController.atualizaAbrigo(req, res));

router.delete("/:id", verificaIdMiddleware, (req, res) => abrigoController.deletaAbrigo(req, res));

router.patch("/:id", verificaIdMiddleware, validateBodyEndereco, (req, res) =>
    abrigoController.atualizaEnderecoAbrigo(req, res)
);

export default router;
