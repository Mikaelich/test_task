// import instances from "../pages/FormPage"
import { requstForm} from "../pages/FormPage";
// import formPage from "C:\Users\Daniam\Desktop\uatappDaniam_test\cypress\cypress\pages\FormPage.ts"
describe('test', () => {
    beforeEach('visit', () => {
        cy.visit('/')
    })
    it('Positive', ()=> {
        requstForm.fillFullForm()
        requstForm.successMsgAssertion('Форма отправлена успешно!', true)
    })
    it('Negative', () => {
        requstForm.fillNameField('test name')
        requstForm.clickRequestBtn()
        requstForm.mailErrorAssertion()
        requstForm.messageErrorAssertion()
        requstForm.successMsgAssertion('', false)
    })
        
})