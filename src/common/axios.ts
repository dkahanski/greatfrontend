import axios from "axios";

const api = axios.create({
	baseURL: "https://yourapi.com",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
