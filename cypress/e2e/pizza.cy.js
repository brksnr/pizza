describe("Form Page", () => {
    describe("Error Messages", () => {
        it("Metin Test", () => {
            cy.visit("http://localhost:5173/");
            cy.get('[data-cy="ad-input"]').type("Berk")
        })
        it("Malzeme Test", () => {
            cy.visit("http://localhost:5173/");
            cy.get('[data-cy="malzeme-input"] input[value="Pepperoni"]')
            .check().should('be.checked');
            cy.get('[data-cy="malzeme-input"] input[value="Sosis"]')
            .check().should('be.checked');
            cy.get('[data-cy="malzeme-input"] input[value="Soğan"]')
            .check().should('be.checked');
            cy.get('[data-cy="malzeme-input"] input[value="Mısır"]')
            .check().should('be.checked');
            cy.get('[data-cy="malzeme-input"] input[value="Domates"]')
            .check().should('be.checked');
        })
        it("Submit Test", () => {
            cy.visit("http://localhost:5173/");
            cy.get('[data-cy="boyut-input"] input[value="orta"]').check().should('be.checked');
            cy.get('[data-cy="hamur-input"] select').select("orta").should('have.value', 'orta');
            cy.get('[data-cy="malzeme-input"] input[value="Sosis"]')
            .check().should('be.checked');
            cy.get('[data-cy="malzeme-input"] input[value="Soğan"]')
            .check().should('be.checked');
            cy.get('[data-cy="malzeme-input"] input[value="Mısır"]')
            .check().should('be.checked');
            cy.get('[data-cy="malzeme-input"] input[value="Domates"]')
            .check().should('be.checked');
            cy.get('[data-cy="ad-input"]').type("Berk")
            cy.get('[data-cy="siparis-input"]').should('be.enabled');
        })
        
    })
})