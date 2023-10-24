// Module imports
import { fetchCharacterData } from "./api/fetchData.js";
import { displayCharacterInfoFromApi } from "./data/displayCharacterInfoFromApi.js";
import { displayCharacterFromLocal } from "./data/displayCharacterFromLocal.js";

// Get DOM elements
const characterErrorContainer = document.getElementById(
  "character-error-message"
);
const houseListContainer = document.getElementById("house-list");

// Event when content is loaded
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  header.classList.add("loaded");
});

// New event when content is loaded (loads house data)
document.addEventListener("DOMContentLoaded", async function () {
  const enneatypeData = "character-enneatype-info";

  const houses = [
    {
      name: "House Stark",
      imagePath: "assets/housesImg/House Stark.png",
      characterIds: [2, 3, 4, 5, 6],
    },
    {
      name: "House Lannister",
      imagePath: "assets/housesImg/House Lannister.png",
      characterIds: [8, 9, 14, 42],
    },
    {
      name: "House Targaryen",
      imagePath: "assets/housesImg/House Targaryen.png",
      characterIds: [0, 26],
    },
    {
      name: "House Baratheon",
      imagePath: "assets/housesImg/House Baratheon.png",
      characterIds: [7, 13, 18, 31],
    },
    {
      name: "House Greyjoy",
      imagePath: "assets/housesImg/House Greyjoy.png",
      characterIds: [12, 45, 46],
    },
    {
      name: "House Tyrell",
      imagePath: "assets/housesImg/House Tyrell.png",
      characterIds: [50, 21],
    },
    {
      name: "House Martell",
      imagePath: "assets/housesImg/House Martell.png",
      characterIds: [39, 60],
    },
    {
      name: "House Bolton",
      imagePath: "assets/housesImg/House Bolton.png",
      characterIds: [28, 35],
    },
    {
      name: "House Mormont",
      imagePath: "assets/housesImg/House Mormont.png",
      characterIds: [37, 33],
    },
  ];

  function selectRandomCharacter(characterIds) {
    const randomCharacterId =
      characterIds[Math.floor(Math.random() * characterIds.length)];
    const enneatypeData = "character-enneatype-info";
    const characterErrorContainer = document.getElementById(
      "character-error-message"
    );
    const characterInfoContainer = document.getElementById(
      "character-basic-info"
    );
    const logoContainer = document.getElementById("character-logo");
    const characterEnneatype = document.getElementById(enneatypeData);
    // Clear the logo at the beginning
    if (logoContainer) {
      logoContainer.innerHTML = "";
    }

    // Clear the API image and text information
    characterInfoContainer.innerHTML = "";
    // Clear any previous error message
    characterErrorContainer.textContent = "";

    fetchCharacterData(randomCharacterId)
      .then((characterData) => {
        displayCharacterInfoFromApi(characterData);
        displayCharacterFromLocal(randomCharacterId, enneatypeData);
      })
      .catch((error) => {
        // Clear the previous content
        characterEnneatype.innerHTML = ""; // Limpiar el contenido anterior

        let errorMessage;

        if (error.message === "Failed to fetch character information.") {
          errorMessage =
            "An error occurred while fetching character information.<br>Please try again later.";
        } else if (error.message === "Character not found in dataCharacters") {
          errorMessage =
            "Character data is no longer available. Please try again.";
        } else {
          errorMessage = "An unknown error occurred. Please try again later.";
        }

        // Create an element to display the error message
        const errorElement = document.createElement("div");
        // Use innerHTML to interpret HTML tags
        errorElement.innerHTML = errorMessage;

        // Clear any previous error message
        characterErrorContainer.innerHTML = "";
        characterErrorContainer.appendChild(errorElement);

        console.error("Error in the request:", error);
      });
  }

  if (houseListContainer) {
    // Create an unordered list element to hold the house list
    const houseList = document.createElement("ul");
    houseList.id = "house-list-ul";

    // Loop through the 'houses' array and create list items for each house
    houses.forEach((house) => {
      // Create a list item for a house
      const houseItem = document.createElement("li");
      houseItem.classList.add("house-card");

      // Create an image element for the house emblem
      const houseImage = document.createElement("img");
      houseImage.src = house.imagePath;
      houseImage.alt = house.name;

      // Create a link element for each house
      const houseLink = document.createElement("a");
      houseLink.href = "#";
      houseLink.appendChild(houseImage);

      // Add a click event listener to the house link
      houseLink.addEventListener("click", (e) => {
        e.preventDefault();
        selectRandomCharacter(house.characterIds);
        loadingText.style.display = "none";
      });

      // Append the house link to the list item
      houseItem.appendChild(houseLink);
      // Append the list item to the unordered list
      houseList.appendChild(houseItem);
    });

    // Clear any previous content in the 'houseListContainer' and append the house list
    houseListContainer.innerHTML = "";
    houseListContainer.appendChild(houseList);
  } else {
    // Display an error message in the console if 'houseListContainer' is not found in the DOM
    console.error(
      'Element with ID "house-list-container" not found in the DOM.'
    );
  }
});

// Get references to the 'characterContainer' and 'loadingText' elements
const characterContainer = document.getElementById("character-container");
// Insert the 'loadingText' element at the beginning of the 'characterContainer'

const loadingText = document.getElementById("text-cover-character-container");
characterContainer.insertBefore(loadingText, characterContainer.firstChild);
