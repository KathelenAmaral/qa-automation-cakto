class ProductsApi {
  constructor() {
    this.productsUrl = 'https://api.escuelajs.co/api/v1/products'
    this.categoriesUrl = 'https://api.escuelajs.co/api/v1/categories'
  }

  listProducts() {
    return cy.request('GET', this.productsUrl)
  }

  getProductById(productId, failOnStatusCode = true) {
    return cy.request({
      method: 'GET',
      url: `${this.productsUrl}/${productId}`,
      failOnStatusCode
    })
  }

  getCategories() {
    return cy.request('GET', this.categoriesUrl)
  }

  createProduct(body, failOnStatusCode = true) {
    return cy.request({
      method: 'POST',
      url: this.productsUrl,
      body,
      failOnStatusCode
    })
  }
}

export default new ProductsApi()