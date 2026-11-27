import { Request, Response } from "express";
import EnumEspecie from "../enum/EnumEspecie";
import EnumPorte from "../enum/EnumPorte";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";
import { RequestBodyPet, RequestParamsPet, ResponseBodyPet } from "../tipos/TiposPet";
import { EnumHttpStatusCode } from "../enum/EnumHttpStatusCode";

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default class PetController {
  constructor(private repository: PetRepository) { }
  async criaPet(
    req: Request<RequestParamsPet, {}, RequestBodyPet>,
    res: Response<ResponseBodyPet>
  ) {
    const { adotado, especie, dataDeNascimento, nome, porte } = <PetEntity>(
      req.body
    );

    const novoPet = new PetEntity(
      nome,
      especie,
      dataDeNascimento,
      adotado,
      porte
    );

    await this.repository.criaPet(novoPet);
    return res.status(EnumHttpStatusCode.CREATED).json({ data: { id: novoPet.id, nome, especie, porte } });
  }

  async listaPet(
    req: Request<RequestParamsPet, {}, RequestBodyPet>,
    res: Response<ResponseBodyPet>
  ) {
    const listaDePets = await this.repository.listaPet();
    const data = listaDePets.map((pet) => {
      return {
        id: pet.id,
        nome: pet.nome,
        especie: pet.especie,
        porte: pet.porte != null ? pet.porte : undefined
      }
    })

    return res.status(EnumHttpStatusCode.OK).json({ data });
  }

  async atualizaPet(
    req: Request<RequestParamsPet, {}, RequestBodyPet>,
    res: Response<ResponseBodyPet>
  ) {
    const { id } = req.params;
    await this.repository.atualizaPet(
      Number(id),
      req.body as PetEntity
    );

    return res.sendStatus(EnumHttpStatusCode.NO_CONTENT);
  }

  async deletaPet(
    req: Request<RequestParamsPet, {}, RequestBodyPet>,
    res: Response<ResponseBodyPet>
  ) {
    const { id } = req.params;
    await this.repository.deletaPet(Number(id));

    return res.sendStatus(EnumHttpStatusCode.NO_CONTENT);
  }

  async adotaPet(
    req: Request<RequestParamsPet, {}, RequestBodyPet>,
    res: Response<ResponseBodyPet>
  ) {
    const { pet_id, adotante_id } = req.params;
    await this.repository.adotaPet(
      Number(pet_id),
      Number(adotante_id)
    );

    return res.sendStatus(EnumHttpStatusCode.NO_CONTENT);
  }

  async buscaPetPorCampoGenerico(
    req: Request,
    res: Response
  ) {
    const { campo, valor } = req.query;
    const listaDePets = await this.repository.buscaPetPorCampoGenerico(
      campo as keyof PetEntity,
      valor as string
    );
    return res.status(EnumHttpStatusCode.OK).json(listaDePets);
  }
}
