import { Request, Response } from "express";
import AdotanteEntity from "../entities/AdotanteEntity";
import AdotanteRepository from "../repositories/AdotanteRepository";
import EnderecoEntity from "../entities/Endereco";
import { RequestParamsAdotante, RequestBodyAdotante, ResponseBodyAdotante } from "../tipos/TiposAdotante";


export default class AdotanteController {
  constructor(private repository: AdotanteRepository) { }
  async criaAdotante(
    req: Request<RequestParamsAdotante, {}, RequestBodyAdotante>,
    res: Response<ResponseBodyAdotante>
  ) {
    const { nome, celular, endereco, foto, senha } = <AdotanteEntity>req.body;

    let bodyValidated: RequestBodyAdotante
    
    const novoAdotante = new AdotanteEntity(
      nome,
      senha,
      celular,
      foto,
      endereco
    );

    await this.repository.criaAdotante(novoAdotante);
    return res.status(201).json({ data: { id: novoAdotante.id, nome, celular } });
  }

  async atualizaAdotante(
    req: Request<RequestParamsAdotante, {}, RequestBodyAdotante>,
    res: Response<ResponseBodyAdotante>
  ) {
    const { id } = req.params;
    const { success, message } = await this.repository.atualizaAdotante(
      Number(id),
      req.body as AdotanteEntity
    );

    if (!success) {
      return res.status(404).json({ error: message });
    }

    return res.sendStatus(204);
  }

  async listaAdotantes(
    req: Request<RequestParamsAdotante, {}, RequestBodyAdotante>,
    res: Response<ResponseBodyAdotante>
  ) {
    const listaDeAdotantes = await this.repository.listaAdotantes();
    const data = listaDeAdotantes.map((adotante) => {
      return {
        id: adotante.id,
        nome: adotante.nome,
        celular: adotante.celular,
        endereco: adotante.endereco != null ? adotante.endereco : undefined
      }
    })
    return res.json({ data });
  }

  async deletaAdotante(
    req: Request<RequestParamsAdotante, {}, RequestBodyAdotante>,
    res: Response<ResponseBodyAdotante>
  ) {
    const { id } = req.params;

    const { success, message } = await this.repository.deletaAdotante(
      Number(id)
    );

    if (!success) {
      return res.status(404).json({ error: message });
    }
    return res.sendStatus(204);
  }

  async atualizaEnderecoAdotante(
    req: Request<RequestParamsAdotante, {}, EnderecoEntity>,
    res: Response<ResponseBodyAdotante>
  ) {
    const { id } = req.params;

    const { success, message } = await this.repository.atualizaEnderecoAdotante(
      Number(id),
      req.body
    );

    if (!success) {
      return res.status(404).json({ error: message });
    }
    return res.sendStatus(204);
  }
}
