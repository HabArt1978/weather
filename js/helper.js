import createContent from './appContent.js'
import createHeader from './appHeader.js'

const directionOfWind = (degree) => {
  if (degree > 377.5) return 'северный' 
  if (degree > 292.5) return 'северo-западный' 
  if (degree > 247.5) return 'западный' 
  if (degree > 202.5) return 'юго-западный' 
  if (degree > 157.5) return 'южный' 
  if (degree > 122.5) return 'юго-восточный' 
  if (degree > 67.5) return 'восточный' 
  if (degree > 22.5) return 'северо-восточный' 

  return 'северный'
}

const capitalizeFirstLetter = (string) => {
  return string.at(0).toUpperCase() + string.slice(1)
}

const resetWeatherContent = (city, weather) => {
  localStorage.setItem('city', JSON.stringify(city))
  document.body.innerHTML = ''
  const header = createHeader(city)
  const content = createContent(weather)
  document.body.append(header, content)
}

const cToF = (celsius) => celsius * 9 / 5 + 32

const fToC = (fahrenheit) => (fahrenheit - 32) * 5 / 9


export {
  directionOfWind,
  capitalizeFirstLetter,
  resetWeatherContent,
  cToF,
  fToC,
}

