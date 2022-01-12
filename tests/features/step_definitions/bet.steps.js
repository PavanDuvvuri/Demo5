const { Given, When, Then } = require('cucumber');

const homePage = require('../../pages/jennings.page.js');
const home = new homePage();


Given(/^I am on the jenningsbet homepage$/, () => {
    home.openHomepage();
});

When(/^I click on basketball links$/, () => {
    home.selectSports();
});

When(/^add an odd to betslip for a match available$/, () => {
    console.log("steps"+home.matchOdd());
    //expect(home.matchOdd()===home.checkprice());
});

Then(/^selected odd is added$/, () => {
    home.checkOdd()
    home.checkprice()
});

When(/^I have an odd added for a match$/, () => {
    home.selectSports();
    home.matchOdd();
 
});

Then(/^match name is correct on betslip$/, () => {
   
    console.log("Match Name"+home.checkOdd());
  
 });

 Then(/^team is displayed in Bold on the betslip$/, () => {
   
    home.checkstyle();

 });

 When(/^I enter the stake amount as 100$/, () => {
    home.addStake();
});

Then(/^potential total returns is equal to odd in decimal multiplied with stake amount$/, () => {
   
    home.totalReturns();
 });

