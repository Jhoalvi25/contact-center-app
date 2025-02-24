import axios from "axios";
import { mockAgents, mockClients } from "./mockData";

const API_URL = "https://api-contact-center.com"; // Cambia por la URL real del servidor

export const fetchAgents = async () => {
  try {
    const response = await axios.get(`${API_URL}/agents`);
    return response.data;
  } catch {
    return mockAgents; //Datos de prueba en caso de que no se obtenga respuesta del servidor
  }
};

export const fetchClients = async () => {
  try {
    const response = await axios.get(`${API_URL}/clients`);
    return response.data;
  } catch {
    return mockClients; //Datos de prueba en caso de que no se obtenga respuesta del servidor
  }
};
