## Automação de Testes UI

A automação de interface foi desenvolvida utilizando Cypress para validar o formulário disponível no site DemoQA Automation Practice Form.

URL utilizada no teste:
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

- Uso de Page Object Model (POM) para separar ações da página dos cenários de teste
- Uso de fixtures para centralizar dados de teste
- Organização clara do código
- Separação entre fluxo positivo e cenários negativos
- Validações objetivas


## Arquivos principais

cypress/e2e/formCakto.cy.js  
Contém os cenários automatizados do formulário.

cypress/pageObjects/formPage.js  
Encapsula os seletores e ações da página.

cypress/fixtures/formData.json  
Contém os dados utilizados no cenário principal.


## Como executar o projeto

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalar dependências

Execute o comando abaixo na raiz do projeto:

npm install

### Executar os testes

Execute o comando:

npx cypress open

Após abrir o Cypress:

1. Selecionar **E2E Testing**
2. Escolher o navegador
3. Executar o arquivo **formCakto.cy.js**