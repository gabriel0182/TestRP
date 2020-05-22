///  <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import multiple from  '../PageObject/multipleitems'

const mp = new multiple

Given('The user is on Homepage', () => {

    mp.HomePage()
    
  });
   
  When('the user clicks Women', (datatable) => { 

    mp.WoMens()
      
  })
   
  When('user clicks Tops', () => { 
   
    mp.ToPs()
      
  }) 

  When('User Clicks blouses', () => { 
   
    mp.Blouses()
      
  }) 

  When('User clicks on add to cart', () => { 
   
    mp.Cart()
}) 

When('The user clicks on continue shopping', () => { 
   
      mp.Alert()
}) 


  Then('The user is returned to the homepage', () => {

    cy.xpath("//body[@id='category']/div[@id='page']/div[@class='header-container']/header[@id='header']/div/div[@class='container']/div[@class='row']/div[@class='col-sm-4 clearfix']/div[@class='shopping_cart']/a[1]").click()
    cy.xpath("//span[@class='quantity']").then(($div) => {
      expect($div).to.have.text('1')
    })
    cy.title().should('eq', 'My Store')
    });
   
 