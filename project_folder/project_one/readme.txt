Purpose - build a webpage for work that can send users to our docs. See our different producs in use with our different verticals. Have a How to page explaining how each feature is utalized and where they can be found in our docs. A siple start to finish guide.

Features: 
  - Navbar
      API Docs, Demo site, Merchant Portal, Login & contact
  - Ecom page
      Displays a list of items with, image, prices
      Shopping cart - where you can add items and gives you total.
      Check out button
        This will then render our companies widget
  - Gaming page
      Black jack
      virtual wallet deposit or withdrawal funds
  - Transactions page
      List of transactions
      Shows status of transactions
      Refund or cancel certain transactions depending on their state
  - Event listener
      A page that shows all the webhooks and events coming to the site to update the transactions
  - How To page
      a quick and easy guide to incoporate or project start to finish
      With code samples and links to our API documentation

*** Maybe:
  User login/setup -
    User will have an API Key, ID and merchant credentials they can input. This will also help with gaming They can put all the required fields necessary to submit a transaction.
    If I do add this eventually I might have to have several webhook services per user since they wont be seeing everyones transactions. Or maybe do an if statment to only show events and transactions if the merchantId matches the one on the profile.
