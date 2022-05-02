const URL = 'http://localhost:1313';
describe('Home page', () => {
    it('Loads and displays some text', () => {
        cy.visit(URL);
        cy.contains('Taiwan');
    });

    it('Should redirect to English on initial load', () => {
        cy.url().should('include', 'en/');
    });

    it('Should have a search box', () => {
        const query = 'business in taiwan';
        cy.get('[data-cy="show-search"]').click(); // Reveal search box
        cy.get('[data-cy="search-box"]').type(query).should('have.value', query);
        cy.contains('business etiquette in taiwan', { matchCase: false });
    });
});