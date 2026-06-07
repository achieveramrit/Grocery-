import axios from "axios";

// Set the base URL for all axios requests
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://amritgrocery.onrender.com";

axios.defaults.baseURL = API_BASE_URL;

// Enable credentials (cookies) for cross-origin requests
axios.defaults.withCredentials = true;

export default axios;
