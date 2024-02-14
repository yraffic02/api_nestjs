## API CRUD de Carros

Este projeto é uma API CRUD para gerenciar carros.

### Criar Carro

Para criar um novo carro, envie uma requisição POST para `/cars` com o seguinte corpo JSON:

```json
{
  "marca": "string",
  "modelo": "string",
  "ano": "number"
}

Obter Todos os Carros
Para recuperar uma lista de todos os carros, envie uma requisição GET para /cars.

Obter Carro por ID
Para recuperar um carro específico pelo seu ID, envie uma requisição GET para /cars/:id.

Atualizar Carro
Para atualizar um carro, envie uma requisição PUT para /cars/:id com o seguinte corpo JSON:
```json
{
  "marca": "string",
  "modelo": "string",
  "ano": "number"
}

Deletar Carro
Para deletar um carro, envie uma requisição DELETE para /cars/:id.

Instalação

npm install

Executando a aplicação

# modo de desenvolvimento
$ npm run start

# modo de observação
$ npm run start:dev

# modo de produção
$ npm run start:prod

Suporte
Nest é um projeto de código aberto licenciado sob o MIT. Ele pode crescer graças aos patrocinadores e apoio dos incríveis apoiadores. Se você gostaria de se juntar a eles, por favor leia mais aqui.

Mantenha-se em contato
Autor - Kamil Myśliwiec
Website - https://nestjs.com
Twitter - @nestframework


Licença
Nest é licenciado sob a licença MIT.
