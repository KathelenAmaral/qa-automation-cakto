# Prova Técnica – Processo Seletivo QA / Automação de Testes - Cakto

Projeto desenvolvido para a prova técnica para a vaga de QA / Automação de Testes.

## Objetivo

Automatizar cenários de testes de interface utilizando Cypress para validar o funcionamento do formulário disponível no site DemoQA.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js

## Automação de Testes UI

A automação foi desenvolvida utilizando Cypress para validar o formulário disponível em:

https://demoqa.com/automation-practice-form

## Cenários implementados

### Cenário positivo

- Acessar a página do formulário  
- Preencher os campos obrigatórios  
- Preencher campos complementares  
- Realizar upload de arquivo  
- Submeter o formulário  
- Validar a exibição do modal de confirmação  
- Validar que os dados exibidos correspondem aos dados informados  

### Cenários negativos

- Não deve enviar o formulário sem telefone  
- Não deve aceitar e-mail inválido  

## Boas práticas aplicadas

- Uso de **Page Object Model (POM)** para separar as ações da página dos cenários de teste
- Uso de **fixtures** para centralizar os dados utilizados nos testes
- Organização clara do código para facilitar futura manutenção
- Separação entre fluxo positivo e cenários negativos
- Validações objetivas para garantir que os dados exibidos correspondem aos dados informados

## Arquivos principais

**cypress/e2e/formCakto.cy.js**  
Contém os cenários automatizados do formulário.

**cypress/pageObjects/formPage.js**  
Centraliza os seletores e ações utilizadas nos testes do formulário.

**cypress/fixtures/formData.json**  
Contém os dados utilizados para preenchimento do formulário no cenário principal.

## Como executar o projeto

### Pré-requisitos

- Node.js instalado (npm já vem incluído)

### Instalar dependências

Na raiz do projeto execute:

npm install

### Executar os testes

Execute o comando:

npx cypress open

Após abrir o Cypress:

1. Selecionar **E2E Testing**
2. Escolha o navegador 
3. Executar o arquivo **formCakto.cy.js**

## Autora

Kathelen Amaral