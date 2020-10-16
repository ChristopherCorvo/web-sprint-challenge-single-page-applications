describe('Quotes App', () =>{ 
    it('can navigate to http://localhost:1234', () => {
        cy.visit('http://localhost:3002/pizza')
        cy.url().should('include', 'localhost')
    })

    it('can type something in the "text" input', ()=> {
        cy.get('.fullName > label > input') // we grab the input
            .type('John Smith') //we type something in the input
            .should('have.value', 'John Smith') // we determine if the input has the appropriate value
    })

    it('can select multiple toppings', () => {

        cy.get('.toppingColumn1 > :nth-child(1)').click()
        cy.get('.toppingColumn1 > :nth-child(2)').click()
        cy.get('.toppingColumn1 > :nth-child(3)').click()
        cy.get('.toppingColumn2 > :nth-child(1) > input').click()
        cy.get('.toppingColumn2 > :nth-child(2) > input').click()
    })

    it('Can submit order when fields are filled out', () =>{
        cy.get('.sc-hKFyIo > button').click()      
    })
}) 

