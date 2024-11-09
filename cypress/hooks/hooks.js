const { beforeEach } = require("mocha")
const { it } = require("mocha")
const { afterEach } = require("mocha")

describe('Login to the application', () => {
   

  // tube 13
  beforeEach(function(){
    cy.log("Log in")
  })

  afterEach(function(){
    cy.log("Logged out");
    
  })
})
// decline cookie
//#hs-eu-opt-in-buttons button:nth-child(2)
