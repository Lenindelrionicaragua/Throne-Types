import { API_URL } from "../constant.js";

export async function fetchCharacterData(randomCharacterId) {
    const apiUrl = `${API_URL}Characters/${randomCharacterId}`;
   
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch character information.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // Captura el error y muestra un mensaje al usuario y en la consola
        const errorMessage = 'Failed to fetch character information. Please try later.';
        console.error('Error:', errorMessage);
        throw new Error(errorMessage);
    }
}