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

    static get setHobbie() {
        return cy.get('div.custom-control');
    }
}