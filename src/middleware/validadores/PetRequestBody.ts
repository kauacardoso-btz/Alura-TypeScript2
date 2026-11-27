import { NextFunction, Request, Response } from "express";
import * as yup from 'yup'
import { RequestBodyPet } from "../../tipos/TiposPet";
import { pt } from 'yup-locale-pt'
import EnumEspecie from "../../enum/EnumEspecie";
import EnumPorte from "../../enum/EnumPorte";
import tratarErroValidacaoYup from "../../utils/TrataValidacaoYup";

yup.setLocale(pt)

const esquemaBodyPet: yup.ObjectSchema<
    Omit<RequestBodyPet, "adotante">
> = yup.object({
    nome: yup.string().defined().required(),
    especie: yup.string().oneOf(Object.values(EnumEspecie)).defined().required(),
    porte: yup.string().oneOf(Object.values(EnumPorte)).defined().required(),
    dataDeNascimento: yup.date().defined().required(),
    adotado: yup.boolean().defined().required(),
})

const middlewareValidadorBodyPet = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    tratarErroValidacaoYup(esquemaBodyPet, req, res, next);
};

export { middlewareValidadorBodyPet }
