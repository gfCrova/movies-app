import { API, API_TOKEN } from './config';

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
      //console.log(data)
      return data;

    } catch (error) {
      console.error(error);
    }
  };