// main.js

import { fetchCharacterData } from './api/fetchData.js';
import { displayCharacterInfoFromApi } from './data/displayCharacterInfoFromApi.js';
import { displayCharacterFromLocal } from './data/displayCharacterFromLocal.js';

const characterErrorContainer = document.getElementById('character-error-container');
const houseListContainer = document.getElementById('house-list-container');

document.addEventListener('DOMContentLoaded', async function () {
    const containerId = 'characterContainer';

    const houses = [
        { name: 'House Stark', characterIds: [2, 3, 4, 5, 6] },
        { name: 'House Lannister', characterIds: [8, 9, 14, 42] },
        { name: 'House Targaryen', characterIds: [0, 26] },
        { name: 'House Baratheon', characterIds: [7, 13, 18, 31] },
        { name: 'House Greyjoy', characterIds: [12, 45, 46] },
        { name: 'House Tyrell', characterIds: [50, 21] },
        { name: 'House Martell', characterIds: [39, 60] },
        { name: 'House Bolton', characterIds: [28, 35] },
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
                    errorMessage = 'An error occurred while fetching character information. Please try again later.';
                } else if (error.message === 'Character not found in dataCharacters') {
                    errorMessage = 'Character data is no longer available. Please try again.';
                } else {
                    errorMessage = 'An unknown error occurred. Please try again later.';
                }
    
                characterErrorContainer.textContent = errorMessage;
                console.error('Error in the request:', error);
            });
    }
    

    if (houseListContainer) {
        const houseLinks = houses.map(house => {
            const houseLink = document.createElement('a');
            houseLink.href = '#';
            houseLink.textContent = house.name;

            houseLink.addEventListener('click', (e) => {
                e.preventDefault();
                selectRandomCharacter(house.characterIds);
            });

            return houseLink;
        });

        const houseList = document.createElement('ul');
        houseLinks.forEach(houseLink => {
            const houseItem = document.createElement('li');
            houseItem.appendChild(houseLink);
            houseList.appendChild(houseItem);
        });

        houseListContainer.innerHTML = '';
        houseListContainer.appendChild(houseList);
    } else {
        console.error('Element with ID "house-list-container" not found in the DOM.');
    }
});
