import { Request, Response } from "express";
import AbrigoEntity from "../entities/AbrigoEntity";
import AbrigoRepository from "../repositories/AbrigoRepository";
import { TipoRequestParamsAbrigo, TipoRequestBodyAbrigo, TipoResponseBodyAbrigo } from "../tipos/TipoAbrigo";

export default class AbrigoController {
    constructor(private repository: AbrigoRepository) {}
    async criaAbrigo(
        req: Request<TipoRequestParamsAbrigo, {}, TipoRequestBodyAbrigo>,
        res: Response<TipoResponseBodyAbrigo>
    ) {
        const { nome, celular, email, senha, endereco } = req.body;
        const novoAbrigo = new AbrigoEntity(nome, celular, email, senha, endereco);

        await this.repository.criaAbrigo(novoAbrigo);
        return res.status(201).json({
            data: { id: novoAbrigo.id, nome, celular, email, endereco },
        });
    }

    async listaAbrigos(
        req: Request<TipoRequestParamsAbrigo>,
        res: Response<TipoResponseBodyAbrigo>
    ) {
        const listaDeAbrigos = await this.repository.listaAbrigos();
        const data = listaDeAbrigos.map(({ id, nome, celular, email, endereco }) => ({
            id,
            nome,
            celular,
            email,
            endereco,
        }));

        return res.json({ data });
    }

    async atualizaAbrigo(
        req: Request<TipoRequestParamsAbrigo, {}, TipoRequestBodyAbrigo>,
        res: Response<TipoResponseBodyAbrigo>
    ) {
        await this.repository.atualizaAbrigo(Number(req.params.id), req.body as AbrigoEntity);
        return res.sendStatus(204);
    }

    async deletaAbrigo(
        req: Request<TipoRequestParamsAbrigo>,
        res: Response<TipoResponseBodyAbrigo>
    ) {
        await this.repository.deletaAbrigo(Number(req.params.id));
        return res.sendStatus(204);
    }

    async atualizaEnderecoAbrigo(
        req: Request<TipoRequestParamsAbrigo>,
        res: Response<TipoResponseBodyAbrigo>
    ) {
        await this.repository.atualizaEnderecoAbrigo(Number(req.params.id), req.body);
        return res.sendStatus(204);
    }
}

