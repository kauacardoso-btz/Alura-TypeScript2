import AdotanteEntity from "../entities/AdotanteEntity";

type RequestBodyAdotante = Omit<AdotanteEntity, "id" | "pets">

type RequestParamsAdotante = { id?: string }

type ResponseBodyAdotante = {
    data?:
    | Pick<AdotanteEntity, "id" | "nome" | "celular" | "endereco">
    | Pick<AdotanteEntity, "id" | "nome" | "celular" | "endereco">[]
}

export { RequestBodyAdotante, ResponseBodyAdotante, RequestParamsAdotante }