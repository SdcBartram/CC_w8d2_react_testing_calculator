describe("Calculator", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display when number buttons are used', () => {
    cy.get('#number4').click()
    cy.get('#number2').click()
    cy.get('.display').should('contain', '42')
  })

  it('should update the display with the result of the operation when a arithmetical operator is used', () => {
    cy.get('#number3').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })

  it('should chain multiple operations together', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '6')
  })

  it('should output positive numbers as expected', () => {
    cy.get('#number9').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '11')
  })

  it('should output negative numbers as expected', () => {
    cy.get('#number3').click()
    cy.get('#operator-subtract').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-2')
  })

  it('should output decimal numbers as expected', () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2.5')
  })

  it('should display very large numbers as expected', () => {
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-multiply').click()
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1000000')
  })

  it('should return an error message', () => {
    cy.get('#number7').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Error')
  })
})