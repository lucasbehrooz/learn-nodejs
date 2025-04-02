# Projeto Backend em Node.js

Este é um projeto backend desenvolvido em **Node.js** para fins de estudo e aprendizado. Ele fornece uma API simples com algumas rotas para manipular requisições HTTP.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js** (Framework para roteamento)
- **Nodemon** (Ferramenta para desenvolvimento com recarga automática)

## Como Rodar o Projeto

### 1. Clonar o repositório

```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Instalar dependências

```sh
npm install
```

### 3. Executar o servidor

```sh
npm run start
```

Ou, para desenvolvimento com recarga automática:

```sh
npm run dev
```

## Endpoints da API

### **1. Rota GET `/hello`**

**Descrição:** Retorna uma mensagem de saudação com nome e idade passados via query params.

**Exemplo de Requisição:**

```
GET http://localhost:3000/hello?nome=Lucas&idade=30
```

**Resposta:**

```json
{
  "title": "Hello World",
  "message": "Olá Lucas, tudo bem?",
  "idade": "30"
}
```

### **2. Rota GET `/hello/:nome`**

**Descrição:** Retorna uma mensagem de saudação personalizada utilizando um **parâmetro de rota**.

**Exemplo de Requisição:**

```
GET http://localhost:3000/hello/Lucas
```

**Resposta:**

```json
{
  "title": "Hello World",
  "message": "Olá Lucas, tudo bem?"
}
```

## Melhorias Futuras

- Adicionar suporte a banco de dados (MongoDB, PostgreSQL, etc.).
- Criar autenticação via JWT.
- Adicionar testes automatizados.
- Criar documentação com Swagger.

## Contribuição

Este é um projeto de estudo, mas sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou fazer um _pull request_.

---

Desenvolvido por [Seu Nome](https://github.com/lucasbehrooz) 🚀
