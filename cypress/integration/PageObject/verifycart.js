///  <reference types="cypress"/>

class Items{

cart(){
   const cr= cy.xpath("//b[contains(text(),'Cart')]").trigger('mousedown', {which: 1})
   cr.click()
   return this;
    }
             
checkout(){
const ch = cy.xpath("//a[@class='button btn btn-default standard-checkout button-medium']//span[contains(text(),'Proceed to checkout')]")
ch.click()
return this;
}
}


export default Items