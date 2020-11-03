describe('Cypress test for GOT app', function() {

    it('Visits the page', function() {
        cy.visit('http://localhost:3000/')
    })

    // Test the get request to an API

    it('Requests an API', function() {
        cy.request({
            url: 'https://anapioficeandfire.com/api/characters/583'
        })
            .then(response => {
                expect(response.body).to.have.property("name", "Jon Snow")
            })  
    })

    // Routing tests

    it('Checks logo routing', function() {
        cy.contains('Game of Thrones DB').click()
        cy.url()
            .should('include', 'http://localhost:3000/')
    })

    // Tests for tabs
    it('Checks characters routing', function() {
        cy.contains('Characters').click()
        cy.url()
            .should('include', '/characters/')
    })

    it('Checks houses routing', function() {
        cy.contains('Houses').click()
        cy.url()
            .should('include', '/houses/')
    })

    it('Checks books routing', function() {
        cy.contains('Books').click()
        cy.url()
            .should('include', '/books/')
    })

    // Tests that check if components render on click

    it('Checks the existance of the block', function() {
        cy.get('.toggle-btn').click()
            .get('.random-block')
            .should('exist')
    })

    it('Checks if you can click on an item in the list', function() {
        cy.get('li.list-group-item').click({multiple: true}) // because there are many elements with this className
            .get('.char-details')
            .should('exist')
    })
})