/// <reference types="cypress" />

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Visits the start page', () => {
    cy.get('[data-test-start="start-button"]').should("be.visible")
    cy.get('[data-test-start="start-button"]').contains("Start")
  })

  it('Testing application', () => {
    cy.get('[data-test-start="start-button"]').contains("Start")

    cy.get('[data-test-score="score-value"]').should("not.exist")
    cy.get('[data-test-answer ="answer-button-0"]').should("not.exist")

    cy.get('[data-test-start="start-button"]').click()
    cy.get('[data-test-score="score-value"]').should("exist")
    cy.get('[data-test-answer ="answer-button-0"]').should("exist")

    cy.get('[data-test-next="next-button"]').should("not.exist")

    cy.get('[data-test-answer ="answer-button-0"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")
    cy.get('[data-test-question = "question-number"]').contains("Question: 1 / 10")
    
    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 2 / 10")
    cy.get('[data-test-answer ="answer-button-1"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")

    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 3 / 10")
    cy.get('[data-test-answer ="answer-button-2"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")

    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 4 / 10")
    cy.get('[data-test-answer ="answer-button-0"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")

    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 5 / 10")
    cy.get('[data-test-answer ="answer-button-1"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")

    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 6 / 10")
    cy.get('[data-test-answer ="answer-button-1"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")

    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 7 / 10")
    cy.get('[data-test-answer ="answer-button-2"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")

    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 8 / 10")
    cy.get('[data-test-answer ="answer-button-1"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")

    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 9 / 10")
    cy.get('[data-test-answer ="answer-button-2"]').click()
    cy.get('[data-test-next="next-button"]').should("exist")

    cy.get('[data-test-next="next-button"]').click()
    cy.get('[data-test-question = "question-number"]').contains("Question: 10 / 10")
    cy.get('[data-test-answer ="answer-button-1"]').click()

    cy.get('[data-test-next="next-button"]').should("not.exist")
  })

})