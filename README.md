# Prova Técnica – Processo Seletivo QA / Automação de Testes - Cakto

![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![Node](https://img.shields.io/badge/runtime-Node.js-green.svg)

Projeto desenvolvido para a prova técnica para a vaga de **QA / Automação de Testes**, com o objetivo de demonstrar conhecimentos em automação de testes de **interface (UI)** e **API**, organização de código e boas práticas utilizando Cypress.

---

## Índice

- [Objetivo](#objetivo)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Automação de Testes UI](#automação-de-testes-ui)
- [Automação de Testes de API](#automação-de-testes-de-api)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Arquivos principais](#arquivos-principais)
- [Como executar o projeto](#como-executar-o-projeto)

---

## Objetivo

Automatizar cenários de testes de **interface (UI)** e **API** utilizando **Cypress**, validando:

- O funcionamento do formulário do site **DemoQA**
- Os endpoints da **API de Products da Fake API Platzi**

---

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js

---

## Automação de Testes UI

A automação foi desenvolvida utilizando Cypress para validar o formulário disponível em:

https://demoqa.com/automation-practice-form

### Cenários implementados

#### Cenário positivo

- Acessar a página do formulário  
- Preencher os campos obrigatórios  
- Preencher campos complementares  
- Realizar upload de arquivo  
- Submeter o formulário  
- Validar a exibição do modal de confirmação  
- Validar que os dados exibidos correspondem aos dados informados  

#### Cenários negativos

- Não deve enviar o formulário sem telefone  
- Não deve aceitar e-mail inválido  

### Boas práticas aplicadas

- Uso de **Page Object Model (POM)** para separar ações da página dos cenários de teste
- Uso de **fixtures** para centralizar os dados utilizados nos testes
- Organização clara do código para facilitar manutenção futura
- Separação entre fluxo positivo e cenários negativos
- Validações objetivas garantindo que os dados exibidos correspondem aos dados informados

---

## Automação de Testes de API

A automação de API foi desenvolvida para validar os endpoints da Fake API Platzi:

https://api.escuelajs.co/api/v1/products

### Cenários implementados

#### Cenários positivos

- Listar produtos com sucesso
- Criar um novo produto com sucesso
- Consultar um produto por ID com sucesso

#### Cenários negativos

- Não deve criar produto com payload inválido
- Não deve consultar produto com ID inexistente

### Validações realizadas

- Validação de **status code da resposta**
- Validação da **estrutura da resposta da API**
- Verificação da presença de propriedades esperadas no retorno da API

---

## Estrutura do projeto


```
cypress
├── e2e
│   ├── api
│   │   products.cy.js
│   │
│   └── ui
│       formCakto.cy.js
│
├── fixtures
│   formData.json
│   product.json
│   invalidProduct.json
│
├── pageObjects
│   formPage.js
│   productsApi.js
│
└── support
```

---

# Arquivos principais

**cypress/e2e/ui/formCakto.cy.js**  
Contém os cenários automatizados do formulário.

**cypress/e2e/api/products.cy.js**  
Contém os cenários automatizados para validação dos endpoints da API de produtos.

**cypress/pageObjects/formPage.js**  
Centraliza os seletores e ações utilizadas nos testes do formulário.

**cypress/pageObjects/productsApi.js**  
Centraliza as chamadas de API utilizadas nos testes automatizados.

**cypress/fixtures/formData.json**  
Contém os dados utilizados para preenchimento do formulário.

**cypress/fixtures/product.json**  
Contém os dados utilizados para criação de produtos.

**cypress/fixtures/invalidProduct.json**  
Contém dados inválidos utilizados nos cenários negativos da API.

---

# Como executar o projeto

## Pré-requisitos

Para executar este projeto é necessário ter instalado:

- **Node.js (versão 16 ou superior)**
- **npm** (instalado junto com Node.js)

Caso não possua o Node.js instalado, faça o download em:

https://nodejs.org/

### Verificar se o Node.js está instalado

No terminal execute:

```bash
node -v
```

Se aparecer uma versão instalada, o Node.js já está configurado corretamente.

Instalar dependências

Na raiz do projeto execute:
```bash
npm install
```

Executar os testes

Para executar os testes em modo interativo:
```bash
npx cypress open
```

Após abrir o Cypress:

Selecionar E2E Testing

Escolher o navegador

Executar os testes desejados:
    formCakto.cy.js (testes de UI)
    products.cy.js (testes de API)

Executar todos os testes via terminal
```bash
npx cypress run
```

----

Autora

Kathelen Amaral