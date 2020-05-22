///  <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import multiple from  '../PageObject/multipleitems'
import dress from  '../PageObject/dress'

const mp = new multiple
const dr = new dress

Given('The user is on Homepage', () => {

    mp.HomePage()
    
  });
   
  When('the user clicks Women', (datatable) => { 

    mp.WoMens()
      
  })
   
  When('user clicks Dresses', () => { 
   
    dr.dresses()
      
  }) 

  When('User Clicks evening dresses', () => { 
   
    dr.evening()
      
  }) 

  When('user clicks on Quick View printed dress', () => { 
   dr.View()
    
}) 

When('user clicks on add to cart from Pop up', () => { 
   
  dr.Popup()
      
}) 

When('the user clicks on continue shopping', () => { 
   
      dr.shopping()
}) 


  Then('The user is returned to the homepage', () => {

    cy.xpath("//b[contains(text(),'Cart')]").trigger('mousedown', {which: 1})
    cy.xpath("//span[@class='quantity']").then(($div) => {
      expect($div).to.have.text('1')
    })
    cy.title().should('eq', 'My Store')
    });
   