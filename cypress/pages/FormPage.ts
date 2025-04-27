let roles = ["null", "cco.officer", "cco.declarant", "cco.supervisor", "cco.hgb", "cco.view", "cco.admin"]
class RequestForm {
    private elements = {
        nameField: () => cy.get("#q_name"),
        mailField: () => cy.get("#q_email"),
        selectServiceField: () => cy.get("#q_service"),
        messageField: () => cy.get("#q_message"),
        requestBtn: () => cy.get("#quoteForm > div > div:nth-child(5) > button"),
        successMsg: () => cy.get("#quoteStatus"),
    }
    fillNameField(name:string){
        this.elements.nameField().type(name)
    }
    fillMailField(mail:string){
        this.elements.mailField().type(mail)
    }
    fillServiceField(service:number){
        this.elements.selectServiceField().select(service)
    }
    fillMessageField(message:string){
        this.elements.messageField().type(message)
    }
    clickRequestBtn(){
        this.elements.requestBtn().click()
    }
    successMsgAssertion(text:string, status:boolean){
        if(status === true){
            this.elements.successMsg().should('contain', text)
        }else{
            this.elements.successMsg().should('not.be.visible') 
        }
       
    }
    mailErrorAssertion(){
        this.elements.mailField().should('have.class', "is-invalid")
    }
    messageErrorAssertion(){
        this.elements.messageField().should('have.class', "is-invalid")
    }
    fillFullForm(){
        this.fillNameField("Test Name")
        this.fillMailField("testmail@mail.com")
        this.fillServiceField(2)
        this.fillMessageField("Test message")
        this.clickRequestBtn()
    }
    
}


export const requstForm = new RequestForm();


