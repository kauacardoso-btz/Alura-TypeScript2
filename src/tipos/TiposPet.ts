import PetEntity from "../entities/PetEntity";

type RequestBodyPet = Omit<PetEntity, "id">

type RequestParamsPet = { 
  id?: string
  pet_id?: string
  adotante_id?: string 
}

type ResponseBodyPet = {
    data?: 
       | Pick<PetEntity, "id" | "nome" | "porte" | "especie">
       | Pick<PetEntity, "id" | "nome" | "porte" | "especie">[]
    error?: unknown
}

export { RequestBodyPet, ResponseBodyPet, RequestParamsPet }