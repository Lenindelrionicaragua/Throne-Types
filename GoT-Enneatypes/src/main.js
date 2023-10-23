import { fetchCharacterData } from './api/fetchData.js';
import { displayCharacterInfoFromApi } from './data/displayCharacterInfoFromApi.js';
import { displayCharacterFromLocal } from './data/displayCharacterFromLocal.js';

const characterErrorContainer = document.getElementById('character-error-container');
const houseListContainer = document.getElementById('house-list');

document.addEventListener('DOMContentLoaded', async function () {
    const containerId = 'character-enneatype';

    const houses = [
        {
            name: 'House Stark',
            imagePath: 'assets/housesImg/House Stark.png',
            characterIds: [2, 3, 4, 5, 6]
        },
        {
            name: 'House Lannister',
            imagePath: 'assets/housesImg/House Lannister.png',
            characterIds: [8, 9, 14, 42]
        },
        {
            name: 'House Targaryen',
            imagePath: 'assets/housesImg/House Targaryen.png',
            characterIds: [0, 26]
        },
        {
            name: 'House Baratheon',
            imagePath: 'assets/housesImg/House Baratheon.png',
            characterIds: [7, 13, 18, 31]
        },
        {
            name: 'House Greyjoy',
            imagePath: 'assets/housesImg/House Greyjoy.png',
            characterIds: [12, 45, 46]
        },
        {
            name: 'House Tyrell',
            imagePath: 'assets/housesImg/House Tyrell.png',
            characterIds: [50, 21]
        },
        {
            name: 'House Martell',
            imagePath: 'assets/housesImg/House Martell.png',
            characterIds: [39, 60]
        },
        {
            name: 'House Bolton',
            imagePath: 'assets/housesImg/House Bolton.jpeg',
            characterIds: [28, 35]
        },
        {
            name: 'House Mormont',
            imagePath: 'assets/housesImg/House Mormont.jpeg',
            characterIds: [37, 33]
        },
    ];
   
    function selectRandomCharacter(characterIds) {
        const randomCharacterId = characterIds[Math.floor(Math.random() * characterIds.length)];
        const container = document.getElementById(containerId);
        const characterInfoContainer = document.getElementById('character-info');
    
        // Limpiar la imagen y la información de texto de la API
        characterInfoContainer.innerHTML = '';
        characterErrorContainer.textContent = ''; // Limpiar cualquier mensaje de error previo
    
        fetchCharacterData(randomCharacterId)
            .then(characterData => {
                displayCharacterInfoFromApi(characterData);
                displayCharacterFromLocal(randomCharacterId, containerId);
            })
            .catch(error => {
                container.innerHTML = ''; // Limpiar el contenido anterior
            
                let errorMessage;
            
                if (error.message === 'Failed to fetch character information.') {
                    errorMessage = 'An error occurred while fetching character information.<br>Please try again later.';
                } else if (error.message === 'Character not found in dataCharacters') {
                    errorMessage = 'Character data is no longer available. Please try again.';
                } else {
                    errorMessage = 'An unknown error occurred. Please try again later.';
                }
            
                // Crear el elemento para mostrar el mensaje de error
                const errorElement = document.createElement('div');
                errorElement.innerHTML = errorMessage; // Usar innerHTML para interpretar las etiquetas HTML
                
                characterErrorContainer.innerHTML = ''; // Limpiar cualquier mensaje de error previo
                characterErrorContainer.appendChild(errorElement);
                
                console.error('Error in the request:', error);
            });
    }
    

    if (houseListContainer) {
        const houseList = document.createElement('ul');
        houseList.id = 'house-list-ul';
        
        houses.forEach(house => {
            const houseItem = document.createElement('li');
            houseItem.classList.add('house-card');
            const houseImage = document.createElement('img');
            houseImage.src = house.imagePath;
            houseImage.alt = house.name;
            
            const houseLink = document.createElement('a');
            houseLink.href = '#';
            houseLink.appendChild(houseImage);

            houseLink.addEventListener('click', (e) => {
                e.preventDefault();
                selectRandomCharacter(house.characterIds);
            });

            houseItem.appendChild(houseLink);
            houseList.appendChild(houseItem);
        });

        houseListContainer.innerHTML = '';
        houseListContainer.appendChild(houseList);
    } else {
        console.error('Element with ID "house-list-container" not found in the DOM.');
    }
});
