import AdotanteEntity from "../entities/AdotanteEntity";

type RequestBodyAdotante = Omit<AdotanteEntity, "id">

type RequestParamsAdotante = { id?: string }

type ResponseBodyAdotante = {
    data?: 
       | Pick<AdotanteEntity, "id" | "nome" | "celular">
       | Pick<AdotanteEntity, "id" | "nome" | "celular">[]
    error?: unknown
}

export { RequestBodyAdotante, ResponseBodyAdotante, RequestParamsAdotante }