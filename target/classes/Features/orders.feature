Feature: Amazon order page
In order to check my order details
As a registered user
I want to specify the features of order details page

Background:

Given user is on Amazon login page
When user enters username
And user enters password
And user clicks on login button
Then user navigates to orders page

Scenario: check previous order details
When user clicks on  previous orders link
Then user checks previous order details

Scenario: check open order details
When user clicks on open orders link
Then user checks open order details

Scenario: check cancelled order details
When user clicks on cancelled order link
Then user checks cancelled order details
