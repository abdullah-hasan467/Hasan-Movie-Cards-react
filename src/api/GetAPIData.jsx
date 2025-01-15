export const getMoviesData = async () => {
  try {
    const response = await fetch(

      //For Marvel
      // `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=marvel&page=1`

      // For Spiderman
       `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=spider-man&page=1`

       //For Avenger
    //     `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers&page=1`

    // for Animation movies
    //  `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=animation&page=1`


  //    // For popular Movies
  // `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=hollywood&page=1`



     );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
