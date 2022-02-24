// Import the JSON data from data.js
import recipeData from "./data.js";

// Parse the imported variable to convert it back into standard JS format
let parsedData = JSON.parse(recipeData);

// Populate the website with recipe cards, using the data from the "parsedData" array

const cakeSection = document.querySelector("#cakes");
const biscuitSection = document.querySelector("#biscuits");
const breadSection = document.getElementById("bread");

// For each "recipe" object in the "parsedData" array...
parsedData.forEach(recipe => {
    // Create new elements to make the card for this recipe
    let newCard = document.createElement("div");
    let img = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h4");
    let cardAuthor = document.createElement("h6");
    let cardDescription = document.createElement("p");

    // Add classes to the elements
    newCard.classList.add("card");
    img.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardAuthor.classList.add("card-author");
    cardDescription.classList.add("description");

    // Use the data to give each element information about the current recipe
    img.src = recipe.image;
    cardTitle.textContent = recipe.title;
    cardAuthor.textContent = recipe.author;

    let ingredients = recipe.ingredients.join(", ");
    cardDescription.textContent = `Ingredients: ${ingredients}`;

    // Create the nested element structure for the card we are making
    // 1. Append the child classes of ".cardBody"
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardAuthor);
    cardBody.appendChild(cardDescription);
    // 2. Append the child classes of ".card"
    newCard.appendChild(img);
    newCard.appendChild(cardBody);

    // 3. Append the ".card" element to the page
    if (recipe.type == "cakes") {
        cakeSection.appendChild(newCard);
    } else if (recipe.type == "biscuits") {
        biscuitSection.appendChild(newCard);
    } else {
        breadSection.appendChild(newCard);
    }
});
