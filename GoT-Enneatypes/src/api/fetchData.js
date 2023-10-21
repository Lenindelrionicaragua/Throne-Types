// fetchData.js
import { API_URL } from "../constant.js";

const characterId = 1;

export async function fetchCharacterData(characterId) {
    const apiUrl = `${API_URL}Characters/${1}`; 

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Failed to fetch character information.');
            return null;
        }
    } catch (error) {
        console.error('Error in the request:', error);
        return null;
    }
}
