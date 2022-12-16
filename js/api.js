const getWeatherData = async(city) => {
  try {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55cbcee24124a56d1b6c657c3ccace3a&lang=ru&units=metric`
      );

      return await response.json();
  } catch (error) {
      console.error(error);
  }
}

export default getWeatherData