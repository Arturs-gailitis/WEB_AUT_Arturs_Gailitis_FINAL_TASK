import { PracticeForm } from "../PageObjects/PracticeForm"

describe('demoqa scenario', () => {
  
  it('automation practice form', () => {
    
    //Open https://demoqa.com/automation-practice-form
    PracticeForm.visit();

    //Set the- Date of Birth- with Calendar widget to- 28th of February, 1930.
    PracticeForm.clickCalendar.click();
    PracticeForm.selectYear.select('1930');
    PracticeForm.selectMonth.select('February');
    PracticeForm.selectDay.last().click();

    //Set Subjects to Economics.
    PracticeForm.setSubject.type('Economics{enter}');

    //Set Hobbies to Music.
    cy.get('body').click();
    PracticeForm.disappearDropdown.should('not.exist');
    PracticeForm.setHobbie.last().click();
    
    //Upload an image of your choice.
    PracticeForm.setImage.selectFile('cypress/fixtures/files/stock_image.jpeg');
    
    //Set State to NCR.
    PracticeForm.clickState.eq(1).click();
    PracticeForm.setStateCity.contains('NCR').click();

    //Set City to Delhi.
    PracticeForm.clickCity.last().click();
    PracticeForm.setStateCity.contains('Delhi').click();

    //Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
    PracticeForm.firstName.type('John');
    PracticeForm.lastName.type('Doe');
    PracticeForm.setEmail.type('JohnDoe221@test.com');
    PracticeForm.setGender.first().click();
    PracticeForm.setMobileNumber.type('1372197301');
    PracticeForm.setAddress.type('Latvia Riga Ernestines iela 33');

    //Click Submit.
    PracticeForm.clickSubmit.click();

    //Validate that each Labeled row contains the correct information.
    PracticeForm.validate.contains('John Doe').should('exist');
    PracticeForm.validate.contains('JohnDoe221@test.com').should('exist');
    PracticeForm.validate.contains('Male').should('exist');
    PracticeForm.validate.contains('1372197301').should('exist');
    PracticeForm.validate.contains('28 February,1930').should('exist');
    PracticeForm.validate.contains('Economics').should('exist');
    PracticeForm.validate.contains('Music').should('exist');
    PracticeForm.validate.contains('stock_image.jpeg').should('exist');
    PracticeForm.validate.contains('Latvia Riga Ernestines iela 33').should('exist');
    PracticeForm.validate.contains('NCR Delhi').should('exist');
  })
})