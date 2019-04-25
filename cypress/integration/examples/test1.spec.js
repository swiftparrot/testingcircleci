/// <reference types="Cypress" />

describe('understanding arrow functions', () => {
    it('arrow function vs ordinary function', () => {

        //arrow function
        cy.visit('wwww.cnn.com')
        .should((response) => {
            console.log(response)
        })

        cy.visit('www.cnn.com')
        .should(
            function (response) {
                console.log(response)
            }

        )


        cy.get('.connectors-list>li').then(function ($lis) {
            expect($lis).to.have.length(3)
            expect($lis.eq(0)).to.contain('Walk the dog')
            expect($lis.eq(1)).to.contain('Feed the cat')
            expect($lis.eq(2)).to.contain('Write JavaScript')
        })

        cy.get('.connectors-list>li')
        .then(function ($lis) {
            expect($lis).to.have.length(3)
            expect($lis.eq(0)).to.contain('Walk the dog')
            expect($lis.eq(1)).to.contain('Feed the cat')
            expect($lis.eq(2)).to.contain('Write JavaScript')
        })



        cy.get('.connectors-list>li')
        .then(($lis) => {
            expect($lis).to.have.length(3)
            expect($lis.eq(0)).to.contain('Walk the dog')
            expect($lis.eq(1)).to.contain('Feed the cat')
            expect($lis.eq(2)).to.contain('Write JavaScript')          
        })
        

        //three different ways of writing "should"
    
        .should('have.text', 'Column content')

        .should((response) => {
            expect(response.text).to.equal('Column content')
        })

        .should( function(response) {
            expect(response.text).to.equal('Column content')
        })

        .should('have.text', 'Column content')
        .should('contain', 'Column content')
        .should('have.html', 'Column content')
        .should('match', 'td')
        .should('be.visible')
        .should('have.attr', 'href')
        .should('include', 'cypress.io')


        expect(true).to.be.true
        expect(o).to.equal(o)
        expect(o).to.deep.equal({ foo: 'bar' })
        expect('FooBar').to.match(/bar$/i)

        
    });
});