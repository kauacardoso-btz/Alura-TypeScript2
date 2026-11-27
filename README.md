# Alura TypeScript 2

Repositório de estudos e projeto prático do curso **TypeScript: desenvolvendo validações e tratando erros**, da Alura.

## Propósito

Este repositório registra a construção de uma API para o projeto Adopet, usando TypeScript, Express, TypeORM e SQLite. A aplicação gerencia abrigos, adotantes e pets, com validação de dados, persistência e tratamento de erros.

## Aprendizados

- criação de DTOs com `Omit` e `Pick`;
- uso dos tipos utilitários `unknown`, `Partial`, `Required`, `Readonly` e `Record`;
- composição de tipos com unions e intersections;
- validação de requisições com Yup;
- criação de expressões regulares para validar números de celular;
- sobrecarga de funções e definição de tipos para diferentes parâmetros;
- criação de erros personalizados estendendo `Error`;
- organização de uma API Express em controllers, repositories, entidades, rotas e middlewares;
- persistência de dados com TypeORM e SQLite;
- validação de parâmetros de rota e tratamento centralizado de erros;
- criptografia de senhas com o módulo `crypto`;
- documentação e testes manuais das rotas com Insomnia.

## Organização dos exemplos

| Arquivo ou diretório | Conceito principal |
| --- | --- |
| `tsconfig.json` | configuração do compilador TypeScript e do diretório de saída |
| `server.ts` | inicialização do servidor na porta 3000 |
| `src/app.ts` | configuração do Express, das rotas e do banco de dados |
| `src/entities/` | entidades `Abrigo`, `Adotante`, `Pet` e `Endereco` do TypeORM |
| `src/controller/` | operações de criação, consulta, atualização e remoção |
| `src/repositories/` | persistência e regras de acesso aos dados |
| `src/routes/` | definição das rotas de abrigos, adotantes e pets |
| `src/middleware/validadores/` | validação dos corpos das requisições com Yup |
| `src/middleware/verificaId.ts` | validação dos parâmetros numéricos das rotas |
| `src/middleware/erro.ts` | tratamento centralizado de erros da API |
| `src/tipos/` | tipos de request, response e parâmetros |
| `src/utils/ManipulaErros.ts` | erros personalizados para requisições inválidas e recursos não encontrados |
| `src/utils/SenhaCriptografada.ts` | geração de hashes para senhas |
| `src/config/dataSource.ts` | configuração da conexão com o SQLite |
| `docs/insomnia.json` | coleção de requisições para testar a API no Insomnia |
| `docs/DER - Adopet.png` | diagrama entidade-relacionamento do projeto |

## Como executar

Na raiz do repositório, instale as dependências:

```bash
npm install
```

Compile o TypeScript para JavaScript:

```bash
npx tsc
```

Inicie o servidor compilado:

```bash
node build/server.js
```

Durante o desenvolvimento, o script `start` recompila a aplicação e reinicia o servidor quando os arquivos são alterados:

```bash
npm start
```

A API ficará disponível em `http://localhost:3000`. As requisições de exemplo estão em `docs/insomnia.json`.
