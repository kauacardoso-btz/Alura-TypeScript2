import { NextFunction, Request, Response } from "express";
import * as yup from 'yup'
import { RequestBodyPet } from "../../tipos/TiposPet";
import { pt } from 'yup-locale-pt'
import EnumEspecie from "../../enum/EnumEspecie";
import EnumPorte from "../../enum/EnumPorte";

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

const middlewareValidadorBodyPet = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await esquemaBodyPet.validate(req.body, {
            abortEarly: false
        })
        return next()
    } catch (error: unknown) {
        const yupErrors = error as yup.ValidationError

        if (error instanceof Error) {
            const validationErrors: Record<string, string> = {}
            yupErrors.inner.forEach((error) => {
                if (!error.path) return
                validationErrors[error.path] = error.message
            })

            return res.status(400).json({ error: error.message })
        }
    }
}

export { middlewareValidadorBodyPet }
