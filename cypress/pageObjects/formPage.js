class FormPage {

  visitarPagina() {
    cy.visit('https://demoqa.com/automation-practice-form', {
      timeout: 120000
    })
  }

  preencherNome(nome, sobrenome) {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
  }

  preencherEmail(email) {
    cy.get('#userEmail').type(email)
  }

  selecionarGenero() {
    cy.get('label[for="gender-radio-2"]').click()
  }

  preencherTelefone(telefone) {
    cy.get('#userNumber').type(telefone)
  }

  preencherSubject(subject) {
    cy.get('#subjectsInput').type(subject + '{enter}')
  }

  selecionarHobby() {
    cy.get('label[for="hobbies-checkbox-3"]').click()
  }

  uploadArquivo() {
    cy.get('#uploadPicture').selectFile('cypress/fixtures/teste.png')
  }

  preencherEndereco(endereco) {
    cy.get('#currentAddress').type(endereco)
  }

  selecionarStateCity() {
    cy.get('#state').click()
    cy.get('[id^="react-select-3-option"]').last().click()

    cy.get('#city').click()
    cy.get('[id^="react-select-4-option"]').last().click()
  }

  submeterFormulario() {
    cy.get('#submit').scrollIntoView().click()
  }

  validarModal() {
    cy.get('.modal-content').should('be.visible')
  }

}

export default new FormPage()