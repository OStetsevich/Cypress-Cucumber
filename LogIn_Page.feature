@regression @login
Feature: PackageHub - Log In Page


    Scenario: Verify Log In functionality with valid credentials
        Given Go to PackageHub Log In Page
        When Click on LogIn button
        And Enter  Email address into the Email field
        And Enter Password into the Password field
        And Click on Sign In button
        Then User is successfuly loged into the system

    Scenario Outline: Verify Log In functionality with invalid credentials
        Given Go to PackageHub Log In Page
        When Click on LogIn button
        And Enter invalid  Email '<_email>' address or Password '<_password>' into the proper field
        And Click on Sign In button
        Then User is not loged into the system - error '<message>' is shown

        Examples:
            | _email                   | _password | message             |
            | stetsevycholga@gmail.com | xxxxxxxxx | User does not exist |
            | stetsevicholga@gmail.com | yyyyyyyyy | Invalid password    |
