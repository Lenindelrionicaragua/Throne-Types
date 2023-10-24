export function displayCharacterInfoFromApi(characterData) {
  const characterInfoContainer = document.getElementById(
    "character-basic-info"
  );

  // Clear the current content of the container
  characterInfoContainer.innerHTML = "";

  // Function to create a text element with a specified ID
  function createTextElement(text, id) {
    const element = document.createElement("p");
    element.innerHTML = `${text}: <span id="${id}"></span>`;
    return element;
  }

  // Function to create an image element with a specified ID
  function createImageElement(id) {
    const element = document.createElement("img");
    element.id = id;
    element.src = "";
    element.alt = "Imagen del personaje";
    return element;
  }

  // Create elements for character information
  const characterName = createTextElement("Fullname", "character-name");
  const characterTitle = createTextElement("Title", "character-title");
  const characterFamily = createTextElement("Family", "character-family");
  const characterImage = createImageElement("character-image");
  characterImage.id = "character-image";

  characterInfoContainer.appendChild(characterImage);
  characterInfoContainer.appendChild(characterName);
  characterInfoContainer.appendChild(characterFamily);
  characterInfoContainer.appendChild(characterTitle);

  // Update the content of the elements using promises
  Promise.resolve(characterData)
    .then((data) => {
      document.getElementById("character-name").textContent = data.fullName;
      document.getElementById("character-family").textContent = data.family;
      document.getElementById("character-title").textContent = data.title;

      if (data.imageUrl) {
        document.getElementById("character-image").src = data.imageUrl;
      } else {
        document.getElementById("character-image").style.display = "none";
      }
    })
    .catch((error) => {
      // Display the error message to the user in a <p> element within the container
      const errorMessageElement = document.createElement("p");
      errorMessageElement.textContent = error.message;
      characterInfoContainer.appendChild(errorMessageElement);

      console.error("Error:", error);
    });
}
