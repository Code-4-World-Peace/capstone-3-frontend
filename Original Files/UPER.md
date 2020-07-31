<h1>The Problem Solving Framework : 'UPER'</h1>

- U = "Understand"
- P = "Plan"
- E = "Execute"
- R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
* I have an e-commerce site built on wordpress. The issue is that I need to recreate it from scratch in React.
*
*
*
*
*
*
*
<h2>
    2. Planning the Solution
</h2>
* Create the general layout of the store page.
* Create Product template that contains the various aspects of a product (name, price, tag, SKU, image, amount in inventory)
* Create a shopping cart.
* Add functionality to add a product to the cart, which decreases amount in inventory.
* Add functionality to remove an item from the shopping cart.
* Add functionality for searching among all products.
*
*
*
*
<h2>
    3. Executing the Plan
</h2>
* Added pages for home, cart, and page not found.
* Created products.json to house the products and their properties.
* Added custom fonts to mimic the site built on wordpress.
* Filled out the products.json
* Imported json file and stored items into an state array.
* Created a products page that populates the products from the state array.
* Build the shopping cart page by using another array to store the cart items - when the "add to cart" button is clicked, it stores an object representing the item in the cart array. The cart page displays this array if it's not empty, otherwise it displays a message that the cart is empty. When an item is added, there is also a counter to display how many items are in the cart.
* Added a Toast for feedback when an item is added to the cart, otherwise adding an item feels very shallow and there is no real feedback if the button did anything otherwise.
* Implemented a stock keeping functionality. When an item is added to the cart, decrease the stock counter. If an item is removed from the cart, increase the stock counter.
* Built searching functionality. User can search by full product name or a partial product name. If no results are found, a unique message is displayed. User can then clear search or search for '' to view all products again. Searching is disabled if user is viewing the cart.
* Consolidated cart items - if multiple of the same products are added, it increases the counter instead of adding multiple instances of the item.
* 
<h2>
    4. Reflection / Refactor
</h2>
* I was able to solve the initial problem. Although I ended up not cloning it exactly as the wordpress site looks, I ended up making a bit simpler version of the site, which accomplishes the same thing. I ended up refactoring the shopping cart, so when multiple of the same items are added, the quantity increases instead of adding a new instance of the item to the cart.
*
*
*
*
*
*
*
