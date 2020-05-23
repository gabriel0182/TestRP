import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import multiple from  '../PageObject/multipleitems'
import dress from  '../PageObject/dress'
import Items from  '../PageObject/verifycart'

const mp = new multiple
const dr = new dress
const it = new Items

Given('The user is on Homepage', () => {

    mp.HomePage()
    mp.WoMens()
    mp.ToPs()
    mp.Blouses()
    mp.Cart()
    mp.Alert()
    mp.WoMens()
    dr.dresses()
    dr.evening()
    dr.View()
    dr.Popup()
    dr.shopping()
    
  });
   
  When('the user clicks Cart', () => { 

    mp.WoMens()
      
  })
   
  When('And user verifies the total products = 2', () => { 
   
    it.cart()
    cy.get("[id='summary_products_quantity']").should('have.text', '2 Products')
      
  }) 

  When('And User Clicks checkout', () => { 
   
    it.checkout()
      
  }) 

  Then('user is taken to the Authentication screen', () => {

        cy.get('.page-heading').should('have.text', 'Authentication')
    });
   