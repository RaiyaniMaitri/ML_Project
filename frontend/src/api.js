import axios from "axios";

const API = axios.create({
  baseURL: "https://ml-project-rx79.onrender.com",
});

export const predictDisease = async (data) => {
  try {
    const res = await API.post("/predict", data);
    return res.data;
  } catch (error) {
    console.error("Prediction API Error:", error);
    throw error;
  }
};