import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import multiple from  '../PageObject/multipleitems'
import dress from  '../PageObject/dress'

const mp = new multiple
const dr = new dress

Given('The user is on Homepage', () => {

    mp.HomePage()
    
  });
   
  When('the user clicks Cart', () => { 

    mp.WoMens()
      
  })
   
  When('And user verifies the total products = 2', () => { 
   
    dr.dresses()
      
  }) 

  When('And User Clicks checkout', () => { 
   
    dr.evening()
      
  }) 

  Then('user is taken to the Authentication screen', () => {

    cy.xpath("//b[contains(text(),'Cart')]").trigger('mousedown', {which: 1})
    cy.xpath("//span[@class='quantity']").then(($div) => {
      expect($div).to.have.text('1')
    })
    cy.title().should('eq', 'My Store')
    });
   