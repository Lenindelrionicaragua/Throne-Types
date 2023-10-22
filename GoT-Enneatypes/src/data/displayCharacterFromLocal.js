import { getCharacterById } from '../data/dataCharacters.js';

export function displayCharacterFromLocal(randomCharacterId, containerId) {
    const existingContainer = document.getElementById(containerId);
    const characterErrorContainer = document.getElementById('character-error-container');
    const character = getCharacterById(randomCharacterId);

    if (character) {
        existingContainer.innerHTML = '';
        createParagraph('Enneatype', character.title);
        createParagraph('Description', character.description);
        createParagraph('Strength', character.strength);
        createParagraph('Weakness', character.weakness);
    } else {
        existingContainer.innerHTML = '';
        characterErrorContainer.textContent = 'Character data is no longer available. Please try again.';
        // Aquí puedes lanzar un error personalizado
        throw new Error('Character not found in dataCharacters');
    }

    function createParagraph(label, text) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `${label}: <span>${text}</span>`;
        existingContainer.appendChild(paragraph);
    }
}
