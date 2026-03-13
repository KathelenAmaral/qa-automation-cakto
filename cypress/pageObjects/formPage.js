class FormPage {
  elements = {
    firstName: () => cy.get('#firstName'),
    lastName: () => cy.get('#lastName'),
    email: () => cy.get('#userEmail'),
    phone: () => cy.get('#userNumber'),
    subject: () => cy.get('#subjectsInput'),
    uploadPicture: () => cy.get('#uploadPicture'),
    address: () => cy.get('#currentAddress'),
    state: () => cy.get('#state'),
    city: () => cy.get('#city'),
    submit: () => cy.get('#submit'),
    modal: () => cy.get('.modal-content')
  }

  visitarPagina() {
    cy.visit('https://demoqa.com/automation-practice-form', {
      timeout: 120000
    })
  }

  preencherNome(nome, sobrenome) {
    this.elements.firstName().type(nome)
    this.elements.lastName().type(sobrenome)
  }

  preencherEmail(email) {
    this.elements.email().type(email)
  }

  selecionarGeneroFemale() {
    cy.get('label[for="gender-radio-2"]').click()
  }

  preencherTelefone(telefone) {
    this.elements.phone().type(telefone)
  }

  preencherSubject(subject) {
    this.elements.subject().type(`${subject}{enter}`)
  }

  selecionarHobbyMusic() {
    cy.get('label[for="hobbies-checkbox-3"]').click()
  }

  uploadArquivo() {
    this.elements.uploadPicture().selectFile('cypress/fixtures/teste.png')
  }

  preencherEndereco(endereco) {
    this.elements.address().type(endereco)
  }

  selecionarStateCity(state, city) {
    this.elements.state().click()
    cy.contains('[id^="react-select-3-option"]', state).click()

    this.elements.city().click()
    cy.contains('[id^="react-select-4-option"]', city).click()
  }

  submeterFormulario() {
    this.elements.submit().scrollIntoView().click()
  }

  validarModal() {
    this.elements.modal().should('be.visible')
    cy.contains('Thanks for submitting the form').should('be.visible')
  }
}

export default new FormPage()