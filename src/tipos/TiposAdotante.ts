import AdotanteEntity from "../entities/AdotanteEntity";

type TipoRequestBodyAdotante = Omit<AdotanteEntity, "id">
type TipoResponseBodyAdotante = Pick<AdotanteEntity, "id" | "nome" | "celular">