import { getCharacterById } from "../data/dataCharacters.js";

export function displayCharacterFromLocal(randomCharacterId, enneatypeData) {
  const characterEnneatype = document.getElementById(enneatypeData);
  const characterErrorContainer = document.getElementById(
    "character-error-message"
  );
  const character = getCharacterById(randomCharacterId);

  if (character) {
    // Clear any existing content in the personality type container
    characterEnneatype.innerHTML = "";
    // Display character information in the DOM
    createParagraph("Enneatype", character.enneatype);
    createParagraph("Description", character.description);
    createParagraph("Strength", character.strength);
    createParagraph("Weakness", character.weakness);
  } else {
    // Display an error message if the character is not found
    characterEnneatype.innerHTML = "";
    characterErrorContainer.textContent =
      "Character data is no longer available. Please try again.";
    throw new Error("Character not found in dataCharacters");
  }
  // Helper function to create and style paragraphs
  function createParagraph(label, text) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `<span>${text}</span>`;

    // Apply styles based on the label (e.g., 'Enneatype')
    if (label === "Enneatype") {
      paragraph.classList.add("character-enneatype-title");
    }

    characterEnneatype.appendChild(paragraph);
  }
}
