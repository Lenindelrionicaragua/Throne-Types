import { API_URL } from "../constant.js";

export async function fetchCharacterData(randomCharacterId) {
  // Construct the API URL for the character with the provided ID
  const apiUrl = `${API_URL}Characters/${randomCharacterId}`;

  try {
    // Send a GET request to the API URL
    const response = await fetch(apiUrl);

    if (!response.ok) {
      // If the response status is not okay, throw an error
      throw new Error("Failed to fetch character information.");
    }

    // Parse the JSON response and return the character data
    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage = "Failed to fetch character information.";
    console.error("Error:", errorMessage);
    throw new Error(errorMessage);
  }
}
