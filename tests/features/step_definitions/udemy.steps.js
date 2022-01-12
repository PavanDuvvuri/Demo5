const { Given, When, Then } = require('cucumber');

const homePage = require('../../pages/google.page.js');
const home = new homePage();

Given(/^I am on google homepage$/, () => {
    home.opengoogleHomepage();
});

When(/^I search for Test automation learning$/, () => {
    home.googleSearch();
});

When(/^click on Udemy from search results$/, () => {
    home.selectUdemy();
});

Then(/^I landed on udemy homepage$/, () => {
    home.verifyUdemy();
});

Then(/^I have a test$/, () => {
    home.opengoogleHomepage();
});

Given(/^I am on the udemy homepage$/, () => {
    home.opengoogleHomepage();
    home.googleSearch();
    home.selectUdemy();
});

Given(/^search for BDD with cucumber courses in that website$/, () => {
    home.udemySearch();
});

When(/^I find the highest rated course$/, () => {
    home.sortCourses();
});

Then(/^I am able to access the course$/, () => {
    home.selectCourse();
});