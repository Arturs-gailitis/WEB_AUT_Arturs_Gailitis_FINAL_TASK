import { BasePage } from "./BasePage";

export class PracticeForm extends BasePage {
    static get url() {
        return 'automation-practice-form';
    }

    static get clickCalendar() {
        return cy.get('input#dateOfBirthInput');
    }

    static get selectYear() {
        return cy.get('select.react-datepicker__year-select');
    }

    static get selectMonth() {
        return cy.get('select.react-datepicker__month-select');
    }

    static get selectDay() {
        return cy.get('div.react-datepicker__day--028');
    }

    static get setSubject() {
        return cy.get('input#subjectsInput');
    }

    static get disappearDropdown() {
        return cy.get('.subjects-auto-complete__option');
    }

    static get setHobbie() {
        return cy.get('div.custom-checkbox');
    }

    static get setImage() {
        return cy.get('input[type=file]');
    }

    static get clickState() {
        return cy.get('div.css-2b097c-container');
    }

    static get setStateCity() {
        return cy.get('div.css-26l3qy-menu');
    }

    static get clickCity() {
        return cy.get('div.css-2b097c-container');
    }

    static get firstName() {
        return cy.get('#firstName');
    }

    static get lastName() {
        return cy.get('#lastName');
    }

    static get setEmail() {
        return cy.get('#userEmail');
    }

    static get setGender() {
        return cy.get('.custom-control-inline');
    }

    static get setMobileNumber() {
        return cy.get('#userNumber');
    }

    static get setAddress() {
        return cy.get('textarea#currentAddress');
    }
}