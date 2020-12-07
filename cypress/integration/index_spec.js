describe('Home page', () => {
    it('Loads and displays some text', () => {
        cy.visit('http://localhost:1313');
        cy.contains('Taiwan');
    });

    it('Should redirect to English on initial load', () => {
        cy.url().should('include', 'en/');
    });

    it('Should have a search box', () => {
        cy.get('[data-cy="show-search"]').click(); // Reveal search box
        cy.get('.search-box:visible').type('why taiwan').should('have.value', 'why taiwan');
        cy.contains('humans of taiwan', { matchCase: false });
    });
});
