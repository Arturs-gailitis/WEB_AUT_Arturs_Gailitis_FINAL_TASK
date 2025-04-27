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
    PracticeForm.setSubject.type('Economics');

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
  })
})