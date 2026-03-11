import formPage from '../pageObjects/formPage'

describe('Cakto - Automation Practice Form', () => {

  beforeEach(() => {
    formPage.visitarPagina()
  })

  it('Deve preencher e enviar o formulário com sucesso', () => {

    cy.fixture('formData').then((data) => {

      formPage.preencherNome(data.firstName, data.lastName)
      formPage.preencherEmail(data.email)
      formPage.selecionarGenero()
      formPage.preencherTelefone(data.phone)

      formPage.preencherSubject(data.subject)
      formPage.selecionarHobby()

      formPage.uploadArquivo()

      formPage.preencherEndereco(data.address)

      formPage.selecionarStateCity()

      formPage.submeterFormulario()

      formPage.validarModal()

      // Validação dos dados exibidos no modal

      cy.contains('td', 'Student Name')
        .next('td')
        .should('contain', `${data.firstName} ${data.lastName}`)

      cy.contains('td', 'Student Email')
        .next('td')
        .should('contain', data.email)

      cy.contains('td', 'Mobile')
        .next('td')
        .should('contain', data.phone)

    })

  })

  it('Não deve enviar o formulário sem telefone', () => {

    cy.fixture('formData').then((data) => {

      formPage.preencherNome(data.firstName, data.lastName)
      formPage.preencherEmail(data.email)
      formPage.selecionarGenero()

      formPage.submeterFormulario()

      cy.get('#userNumber').then(($input) => {
        expect($input[0].checkValidity()).to.be.false
      })

    })

  })

  it('Não deve aceitar email inválido', () => {

    formPage.preencherNome('Kathelen', 'Amaral')
    formPage.preencherEmail('email_invalido')
    formPage.selecionarGenero()
    formPage.preencherTelefone('4199999999')

    formPage.submeterFormulario()

    cy.get('#userEmail').then(($input) => {
      expect($input[0].checkValidity()).to.be.false
    })

  })

})