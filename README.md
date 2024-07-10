# Miniatures Store App  

The objective of this project was to create a small fictional online shopping store for people who enjoy buying miniature items. My aim was to be able to incorporate functionality to my web app that would provide authentication for the users who wanted to log in and register through my web app to allow them to view their own private pages. I also wanted to have a database that would store the product and user information, including a user’s cart items, so that they could also be retrieved through the application. The overall goal was to make this application user-friendly and easy to navigate. I also wanted to add happy, vivid colors to make it more memorable so that users could enjoy the overall experience.

Initial Home Page before Signing in (The Nav Bar takes the user to the “Mini Items”, “Login”, or “Register” page. The Footer has links to attribute the “M” icon and the background picture, along with a short disclaimer. The “View Products” button takes the user straight to the “Mini Items” page).

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.10.12%20PM.png)

“Mini Items” page before signing in (users are not able to add to cart until they are signed in). Each “Sign in to Add to Cart” button will redirect the user to the “Login” page.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.10.22%20PM.png)

“Login” page - allows the user to sign in to their account if they’ve already created one through the Registration form on the “Register” page. They can also log in with their Google account if they use the “Google” button. There is also a link at the bottom of the form that will redirect them to the “Register” page if they need to create an account.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.10.34%20PM.png)

“Register” page - allows the user to create an account if they don’t already have one. There is also a link at the bottom of the form that will redirect them to the “Login” page in case they already have an account.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.10.43%20PM.png)

“Login” page showing user input validation on the form. Users will need to input valid information in order to sign in. If a user tries to click the “Login” button with invalid information, an error message will appear that says “Invalid Input Values".

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.11.25%20PM.png)

If a user tries to click the “Login” button with an account that doesn’t exist in the database, an error message will appear that says “Authentication Error”.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.11.47%20PM.png)

The "Register" page also has input validation. If a user tries to create an account with invalid information, an error will appear that says “Invalid Input Values”.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.17.09%20PM.png)

Home Page after signing in with my Google account as an example. A private “My Account” and “Cart” link will show up in the navigation bar and the “Login” and “Register” links will be replaced by a “Logout” button. If anyone tries to access these private pages without being logged in, they will be re-directed to the “Login” page.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.12.26%20PM.png)

“Mini Items” page after signing in (the buttons have changed to now allow the user to add items to their cart).

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.13.42%20PM.png)

“My Account” page that shows the current user’s name and email address (mine is shown for example purposes).

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.13.48%20PM.jpg)

“Cart” page before a user adds any items. The “Start Shopping” button will take a user to the “Mini Items” page if pressed.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.13.55%20PM.png)

When a user clicks the “Add to Cart” button under an item in the “Mini Items” page, a pop-up notification will appear in the bottom right hand corner to let them know it has been “Added to Cart!"

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.14.05%20PM.png)

The following image is how the user’s cart in the “Cart” page will look after adding items. Each item is listed with the item’s name, picture, and price. The “Remove Item” button under each item will allow the user to remove the item from their cart, which will also remove the item from their cart in the database. The total and subtotal amounts are automatically updated as each item is added or deleted. The “Continue Shopping” button at the bottom will take the user back to the “Mini Items” page in case they want to add more items and the “Checkout” button will display a pop-up alert box that says “Thank you, your order has been placed!” This event will also clear all the cart items for that user.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.14.36%20PM.png)

When I press the “Remove Item” button for one of the items in my cart, the Firestore database will also delete the item at the same moment. The subtotal and total amounts will automatically be updated to reflect the changes as well. A display box will appear upon clicking the “Checkout” button that says “Thank you, your order has been placed!” 

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.15.54%20PM.png)

The above event clears all the cart items for that user. It also clears the items in the cart and deletes the items for the user in Firestore.

If the user tries to access a page that doesn’t exist, an error page will appear. The “Back to Homepage” button will take the user back to the “Home” page if clicked.

![](/readme-images/Screen%20Shot%202021-05-09%20at%207.23.49%20PM.png)
