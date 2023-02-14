# Teste DPC

Para execução do projeto é necessário realizar os seguintes passos:

## API:
Validar as credenciais padrões do banco de dados:
Usuário: sa
Senha: 123456
Caso a suas credenciais sejam diferentes, deverá alterar no arquivo no caminho abaixo, na config "DefaultConnection":
```sh
backend\Api\appsettings.json
```

## Criação da estrutura do banco de dados
Após a execução do procedimento acima, basta executar os seguintes para que o entity framework core crie as tabelas.
```sh
Add-Migrations criacao-db
update-database
```

## FRONT:

- Ao abrir o projeto, executar o comando -> npm install <- na pasta raiz da aplicação;


## Execução do projeto:
- Para executar o projeto (front-end) , na pasta raiz digite -> npm run dev
- Para executar a camada de api do projeto, execute o comando -> npm run server