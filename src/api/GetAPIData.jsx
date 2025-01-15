export const getMoviesData = async () => {
  try {
    const response = await fetch(

      //For Marvel
      // `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=marvel&page=1`

      // For Spiderman
       `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=spider-man&page=1`

       //For Avenger
    //     `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers&page=1`

    // for Animation movies
    //  `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=animation&page=1`


  //    // For popular Movies
  // `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=hollywood&page=1`



     );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
