// displayCharacterInfoFromApi

export function displayCharacterInfoFromApi(characterData) {
    const characterInfoContainer = document.getElementById('character-basic-info');

    // Limpia el contenido actual del contenedor
    characterInfoContainer.innerHTML = '';

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
    characterImage.id = 'character-image';

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
            // Muestra el mensaje de error al usuario en un elemento <p> dentro del contenedor
            const errorMessageElement = document.createElement('p');
            errorMessageElement.textContent = error.message;
            characterInfoContainer.appendChild(errorMessageElement);

            console.error('Error:', error);
        });
}