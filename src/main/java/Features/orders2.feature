Feature: Amazon order page
Scenario: check previous order details
Given user is on Amazon login page
When user enters username
And user enters password
And user clicks on login button
Then user navigates to orders page
Then closes the browser