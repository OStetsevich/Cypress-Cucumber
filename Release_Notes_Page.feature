@regression @release_notes
Feature: Release Notes Page Functionality


Scenario: Create new Release Note
Given Log In
When Navigate to Global Admin Module and select Release Notes from the list
And Click on Create New Release Note button
And Enter Name into Release Name field
And Enter Description itno Description field
And Click on Create Release button
Then New Release Note is created


Scenario: Edit existed Release Note
Given Log In
When Navigate to Global Admin Module and select Release Notes from the list
And Click on id of any Release Note from the list
And Update Name
And Update Description
And Click on Update Release button
Then Release Note is updated


Scenario: Delete existed Release Note
Given Log In
When Navigate to Global Admin Module and select Release Notes from the list
When Click on Actions icon of any Release Note from the list
And Click on Archive option
Then Release Note is deleted

