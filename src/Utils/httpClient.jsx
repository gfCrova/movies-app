import { API_TOKEN } from './config';

const API = "https://api.themoviedb.org/3";

export const get = async (path) => {
    
    try {
      const response = await fetch(API + path, {
        headers: {
          Authorization:
            "Bearer " + API_TOKEN,
          "Content-Type": "application/json;charset=utf-8",
        },
      });
  
      const data = await response.json();
      return data;

    } catch (error) {
      console.error(error);
    }
  };