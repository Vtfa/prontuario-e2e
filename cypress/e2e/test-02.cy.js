describe('Area', () => {

    beforeEach(() => {
        cy.login();
    });

    it('Create a new area', () => {
        cy.visit('/dashboard/user')

        cy.get('[data-cy="side-menu-button"]').click();
        cy.get('[data-cy="side-menu-option-systemSettings"] span.ant-menu-title-content').click();
        cy.get('#rc_select_1').click();
        cy.contains('Áreas').click();
        cy.get('[data-cy="bigAdd-button"] svg').click();
        cy.get('[data-cy="name"]').click();
        cy.get('[data-cy="name"]').type('area grupo 04 teste');
        cy.get('[data-cy="description"]').click();
        cy.get('[data-cy="description"]').type('teste grupo 04');
        cy.get('[data-cy="save-button"] span').click();

    })
  });











