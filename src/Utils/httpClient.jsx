const api = "https://api.themoviedb.org/3";

export const get = async (path) => {
    
    try {
      const response = await fetch(api + path, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWMyOGIxNjVlNzE2Nzc1MjdkZWQ3MWJiNGFlMmUwZSIsInN1YiI6IjY0OTY5NDZjZWI3OWMyMDBmZjAwNDI5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NujYKcDOI7ikvVncmriuzNCgGlgCxawlx85_6-AyQeo",
          "Content-Type": "application/json;charset=utf-8",
        },
      });
  
      const data = await response.json();
      return data;

    } catch (error) {
      console.error(error);
    }
  };