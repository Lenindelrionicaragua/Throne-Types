import { getCharacterById } from '../data/dataCharacters.js';

export function displayCharacterFromLocal(characterId, containerId) {
    const existingContainer = document.getElementById(containerId);
    const character = getCharacterById(characterId);

    if (character) {
        existingContainer.innerHTML = ''; 
       
        createParagraph('Enneatype', character.title);
        createParagraph('Description', character.description);
        createParagraph('Strength', character.strength);
        createParagraph('Weakness', character.weakness);
    } else {
        handleNoCharacterDataError();
    }

    // Función para crear un párrafo y agregarlo al contenedor
    function createParagraph(label, text) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `${label}: <span>${text}</span>`;
        existingContainer.appendChild(paragraph);
    }
}
