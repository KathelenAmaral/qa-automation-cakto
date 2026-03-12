import productsApi from '../../pageObjects/productsApi'

describe('API Products - Fake API Platzi', () => {

  it('deve listar produtos com sucesso', () => {
    productsApi.listProducts().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)

      const product = response.body[0]

      expect(product).to.have.property('id')
      expect(product).to.have.property('title')
      expect(product).to.have.property('price')
      expect(product).to.have.property('description')
      expect(product).to.have.property('images')
      expect(product).to.have.property('category')
    })
  })

  it('deve criar um novo produto com sucesso', () => {
    productsApi.getCategories().then((categoryResponse) => {
      expect(categoryResponse.status).to.eq(200)
      expect(categoryResponse.body).to.be.an('array')
      expect(categoryResponse.body.length).to.be.greaterThan(0)

      const categoryId = categoryResponse.body[0].id

      cy.fixture('product').then((newProduct) => {
        newProduct.categoryId = categoryId

        productsApi.createProduct(newProduct, false).then((response) => {
          expect([201, 400]).to.include(response.status)

          if (response.status === 201) {
            expect(response.body).to.have.property('id')
            expect(response.body.title).to.eq(newProduct.title)
            expect(response.body.price).to.eq(newProduct.price)
            expect(response.body.description).to.eq(newProduct.description)
            expect(response.body.images).to.deep.equal(newProduct.images)
          }
        })
      })
    })
  })

  it('deve consultar um produto por ID com sucesso', () => {
    productsApi.listProducts().then((listResponse) => {
      expect(listResponse.status).to.eq(200)
      expect(listResponse.body).to.be.an('array')
      expect(listResponse.body.length).to.be.greaterThan(0)

      const productId = listResponse.body[0].id

      productsApi.getProductById(productId).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', productId)
        expect(response.body).to.have.property('title')
        expect(response.body).to.have.property('price')
        expect(response.body).to.have.property('description')
        expect(response.body).to.have.property('images')
        expect(response.body).to.have.property('category')
      })
    })
  })

  it('não deve consultar produto com ID inexistente', () => {
    const invalidId = 999999999

    productsApi.getProductById(invalidId, false).then((response) => {
      expect([400, 404]).to.include(response.status)
      expect(response.body).to.have.property('message')
    })
  })

  it('não deve criar produto com payload inválido', () => {
    cy.fixture('invalidProduct').then((invalidProduct) => {
      productsApi.createProduct(invalidProduct, false).then((response) => {
        expect([400, 422]).to.include(response.status)
      })
    })
  })

  it('deve validar o schema básico da listagem de produtos', () => {
    productsApi.listProducts().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)

      const product = response.body[0]

      expect(product).to.include.all.keys(
        'id',
        'title',
        'price',
        'description',
        'images',
        'category'
      )

      expect(product.id).to.be.a('number')
      expect(product.title).to.be.a('string')
      expect(product.price).to.be.a('number')
      expect(product.description).to.be.a('string')
      expect(product.images).to.be.an('array')
      expect(product.category).to.be.an('object')

      expect(product.category).to.include.all.keys(
        'id',
        'name',
        'image'
      )
    })
  })

})