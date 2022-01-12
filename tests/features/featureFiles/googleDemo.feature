Feature: Select top rated course from Udemy

@udemy
@Scenario4
Scenario: Ensure searching for udemy in google is successful

Given I am on google homepage
When  I search for Test automation learning 
And   click on Udemy from search results
Then  I landed on udemy homepage
And   I have a test 

@udemy
@Scenario5
Scenario: Ensure searching and finding a top rated course in udemy site is successful

Given I am on the udemy homepage
And   search for BDD with cucumber courses in that website
When  I find the highest rated course
Then  I am able to access the course


