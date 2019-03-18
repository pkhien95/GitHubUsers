
const API_BASE_URL = "https://api.github.com/users/";

export const getUser = async (userId) => {
	try {
		const url = API_BASE_URL + userId;
		console.log("REQUEST: " + url);
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		console.log(`Cannot get user ${userId}`, error);
	}
};