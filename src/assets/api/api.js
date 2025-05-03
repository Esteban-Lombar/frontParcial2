// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // cambia esto si usas Vercel u otro dominio
});

export default api;
