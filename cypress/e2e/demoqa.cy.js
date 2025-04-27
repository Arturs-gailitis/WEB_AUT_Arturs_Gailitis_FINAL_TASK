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
    PracticeForm.setHobbie.eq(2).click();
    //Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
    
  })
})