import { NextFunction, Request, Response } from "express";
import * as yup from 'yup'
import { RequestBodyAdotante } from "../../tipos/TiposAdotante";

const esquemaBodyAdotante: yup.ObjectSchema<
    Omit<RequestBodyAdotante, "endereco">
> = yup.object({
    nome: yup.string().defined().required(),
    celular: yup.string().defined().required(),
    senha: yup.string().defined().required().min(6),
    foto: yup.string().optional()
})

const middlewareValidadorBodyAdotante = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await esquemaBodyAdotante.validate(req.body, {
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

export { middlewareValidadorBodyAdotante }
