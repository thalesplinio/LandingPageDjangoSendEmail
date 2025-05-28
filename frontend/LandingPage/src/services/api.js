// Endpoints centralizados da api
const API_BASE = import.meta.env.VITE_REACT_APP_API_URL;
const API_BASE_MORE_API = import.meta.env.VITE_REACT_APP_API_URL + "/api/";

export const API_ENDPOINTS = {
    BASE_API: API_BASE,
    PING_API: `${API_BASE_MORE_API}ping/`,
    SITE_SETUP: `${API_BASE_MORE_API}site_setup/`,
    SOCIAL_MIDIA: `${API_BASE_MORE_API}social_midia/`,
    TECHNOLOGIES: `${API_BASE_MORE_API}technology/`,
    PROJECTS: `${API_BASE_MORE_API}projects/`,
    CONTACTS: `${API_BASE_MORE_API}contact/`,
}
