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
        cy.get('.search-box:visible').type(query).should('have.value', query);
        cy.contains('business etiquette in taiwan', { matchCase: false });
    });
});

describe('Why Taiwan', () => {
    it('Should not display the date on posts without a date', () => {
        // No date!
        cy.visit(`${URL}/en/why-taiwan/business-etiquette-in-taiwan/`);
        cy.get('[data-cy="date-string"]').should('not.exist');

        // Date please!
        cy.visit(
            `${URL}/en/news/an-information-platform-of-education-for-expat-children-has-been-set-up/`
        );
        cy.get('[data-cy="date-string"]').should('exist');
    });
});
