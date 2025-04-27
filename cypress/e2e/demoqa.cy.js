import { PracticeForm } from "../PageObjects/PracticeForm"

describe('demoqa scenario', () => {
  
  it('automation practice form', () => {
    
    //Open https://demoqa.com/automation-practice-form
    PracticeForm.visit();
  })
})