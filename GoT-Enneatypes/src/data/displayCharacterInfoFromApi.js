export function displayCharacterInfoFromApi(characterData) {
    const characterInfoContainer = document.getElementById('character-info');

    function createTextElement(text, id) {
        const element = document.createElement('p');
        element.innerHTML = `${text}: <span id="${id}"></span>`;
        return element;
    }

    function createImageElement(id) {
        const element = document.createElement('img');
        element.id = id;
        element.src = '';
        element.alt = 'Imagen del personaje';
        return element;
    }

    const characterName = createTextElement('Fullname', 'character-name');
    const characterTitle = createTextElement('Title', 'character-title');
    const characterFamily = createTextElement('Family', 'character-family');
    const characterImage = createImageElement('character-image');

    characterInfoContainer.appendChild(characterImage);
    characterInfoContainer.appendChild(characterName);
    characterInfoContainer.appendChild(characterFamily);
    characterInfoContainer.appendChild(characterTitle);

    // Actualiza el contenido de los elementos usando promesas
    Promise.resolve(characterData)
        .then(data => {
            document.getElementById('character-name').textContent = data.fullName;
            document.getElementById('character-family').textContent = data.family;
            document.getElementById('character-title').textContent = data.title;

            if (data.imageUrl) {
                document.getElementById('character-image').src = data.imageUrl;
            } else {
                document.getElementById('character-image').style.display = 'none';
            }
        })
        .catch(error => { 
            console.error('Error:', error);
        });
}
