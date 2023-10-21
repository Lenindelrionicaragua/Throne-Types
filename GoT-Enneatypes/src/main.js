// main.js

import { fetchCharacterData } from './api/fetchData.js';
import { displayCharacterInfoFromApi } from './data/displayCharacterInfoFromApi.js';
import { displayCharacterFromLocal } from './data/displayCharacterFromLocal.js';

document.addEventListener('DOMContentLoaded', async function () {
    const characterData = await fetchCharacterData();
    const characterId = 9; // El ID del personaje que deseas mostrar
    const containerId = 'characterContainer'; // El ID del contenedor en el que deseas mostrar la información

    displayCharacterFromLocal(characterId, containerId);

  
    displayCharacterInfoFromApi(characterData);

    // Agrega el código para mostrar la lista de casas y seleccionar un personaje
    const houseListContainer = document.getElementById('house-list-container');

    // Define la lista de casas y sus personajes
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

    const houseLinks = houses.map(house => {
        const houseLink = document.createElement('a');
        houseLink.href = '#';
        houseLink.textContent = house.name;

        houseLink.addEventListener('click', (e) => {
            e.preventDefault();
            const randomCharacterId = selectRandomCharacter(house.characterIds);
            displayCharacterFromLocal(randomCharacterId, containerId);
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
});
