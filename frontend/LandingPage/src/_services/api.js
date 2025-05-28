// Endpoints centralizados da nossa api
const API_BASE = import.meta.env.VITE_REACT_APP_API_URL + "/api/";

export const API_ENDPOINTS = {
    PING_API: `${API_BASE}ping/`,
    SITE_SETUP: `${API_BASE}site_setup/`,
    SOCIAL_MIDIA: `${API_BASE}social_midia/`,
    TECHNOLOGIES: `${API_BASE}technology/`,
    PROJECTS: `${API_BASE}projects/`,
    CONTACTS: `${API_BASE}contact/`,
}
