// src/utils/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:8000/api'; // Replace with your backend URL.

export const uploadCourseMaterial = (formData) => {
  return axios.post(`${API_BASE}/upload`, formData);
};

export const generateStudyGuide = (materialId) => {
  return axios.get(`${API_BASE}/study-guide/${materialId}`);
};
