
## Criação de tabelas pra campos dinamicos
Criaremos uma tabela somente para os campos adicionais que o usuário for cadastrar;
`
[
  {
    id: uuid,
    type: tipo html do input,
    label: Nome do input que o usuário irá cadastrar,
  },
]
`

## Criação da tabela do form
`
{
  id: uuid,
  name: string;
  description: string;
  aditionals: [
    {
      id: uuid,
      label: Nome do input que foi cadastrado o dado,
      value: Valor do input que foi cadastrado,
    },
  ]
}
`

## Guia para rodar o backend.


## # Necessário:  
  - Node
  - Yarn ou NPM 
  - Banco de dados ( Escolha uma opção das 3, no caso docker ele já vai criar o DB e o usuário, caso do postgres, crie o próprio DB e usuário )
    - Docker/Docker-compose( linux );
    - Docker Desktop ( Win/Mac ); 
    - PostgreSQL;

## Rodando o Backend:

  - rode `yarn` ou `npm install`; 
  - crie um aquivo na raiz do projeto chamado `.env` copie os valores do `.env.example` para ele;
  - rode `docker-compose up -d`;
  - rode `yarn typeorm migration:run`;
  - rode `yarn dev` ou `npm run dev`;
  - acesse `localhost:3333`;
    - SE NECESSÁRIO, PARA REVERTER AS MIGRATIONS, rode `yarn typeorm migration:revert`;
    - SE NECESSÁRIO, PARA DROPAR O DB, rode `yarn typeorm schema:drop` e depois `yarn typeorm migration:run`;
