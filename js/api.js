const getWeatherData = async city => {
  if (typeof city != "string" || city.length < 2) {
    return {
      message: "Введите корректное название города",
    }
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55cbcee24124a56d1b6c657c3ccace3a&lang=ru&units=metric`
    )

    return await response.json()
  } catch (error) {
    return {
      message: "Извините, произошла ошибка, попробуйте ещё раз!",
    }
  }
}

export default getWeatherData
