
Feature:  Kare Hero
  As a Kare Employee
  I want to validate the documents of a user
  So that user can apply to become a hero

  @demo
  Scenario: List of documents of a user with
    Given A List of documents from a user
    When A Kare Employee clicks in a document to open
    Then Verify that everything correspond with the user and expiration date
    Then The user update the status to approved 
    Then the document is updated 