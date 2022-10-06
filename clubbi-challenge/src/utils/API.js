export const getMovies = async () => {
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
} 