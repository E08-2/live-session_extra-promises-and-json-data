# Baking Box

Populate a website with details of recipes!

### Instructions:
* In the `data.js` file, you can find a data structure for the details of recipes. 
* Convert the data in `data.js` to a JSON string and **export** it from `data.js`.
* **Import** the JSON string into the `index.js` file. 
* In the `index.js` file, convert the JSON string back into JS data. 
* Create a program that uses the imported data to populate the HTML page with recipes. 
* The page should display every recipe as a **card** which includes the recipe image, title, author and ingredients.
* For an example of how the page could look, **check out the example image at the bottom of this file**

### Suggested Approach:
* A suggested approach is to **loop** through each of the imported data's recipe objects in `index.js`. 
* In each loop, you can **create elements using JavaScript** which together make up the card for that recipe. When you are finished you can append (add) the card to the DOM using `document.appendChild()`.
* In each card you should also use data from the recipe object to give (1) the card's `img` element a `src` value, and (2) the card's title, author and description elements relevant `textContent`. For example: 

```js
let img = document.createElement("img");
img.src = /* a relevant string taken from the data object */

let recipeTitle = document.createElement("h4");
recipeTitle.textContent = /* a relevant string taken from the data object */
```

* Finally, you should make sure that each recipe is appended to the **correct** section of the page. That is, cake recipes should be under the section "cakes" etc. 

### Hint:

* If you want to use the existing CSS styling so your elements are styled correctly, you should make sure each recipe card has the following structure before you populate it with data / append it to the page:

```js
<div class="card">
    <img class="card-img-top">
    <div class="card-body">
        <h4 class="card-title"></h4>
        <h6 class="card-author"><h6>
        <p class="description"></p>
    </div>
</div>
```

![Populated baked goods](images/bakery.png)