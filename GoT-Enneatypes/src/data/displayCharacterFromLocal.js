import { getCharacterById } from '../data/dataCharacters.js';

export function displayCharacterFromLocal(randomCharacterId, enneatypeData) {
    const characterEnneatype = document.getElementById(enneatypeData);
    const characterErrorContainer = document.getElementById('character-error-message');
    const character = getCharacterById(randomCharacterId);

    if (character) {
        characterEnneatype.innerHTML = '';
        createParagraph('Enneatype', character.enneatype);
        createParagraph('Description', character.description);
        createParagraph('Strength', character.strength);
        createParagraph('Weakness', character.weakness);
    } else {
        characterEnneatype.innerHTML = '';
        characterErrorContainer.textContent = 'Character data is no longer available. Please try again.';
        // Aquí puedes lanzar un error personalizado
        throw new Error('Character not found in dataCharacters');
    }

    function createParagraph(label, text) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<span>${text}</span>`;
        
        if (label === 'Enneatype') {
            paragraph.classList.add('character-enneatype-title');
        }
    
        characterEnneatype.appendChild(paragraph);
    }
}
