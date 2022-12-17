const _cityWrapper = document.querySelector(".header__city")
const cityNameHeading = _cityWrapper.querySelector("h1.city__name")
const cityChangerBtn = _cityWrapper.querySelector("button.city__change")
const cityLocationBtn = _cityWrapper.querySelector("button.city__location")

const celsiusUnitsBtn = document.querySelector("button.units__c")
const fahrenheitUnitsBtn = document.querySelector("button.units__f")

const citySearchForm = document.querySelector("form.city-search")
const citySearchInput = citySearchForm.querySelector("input.city-search__input")
const citySearchBtn = citySearchForm.querySelector("button.city-search__btn")
const citySearchError = citySearchForm.querySelector(".city-search__error")

const _weatherSection = document.querySelector("section.weather")
const weatherIcon = _weatherSection.querySelector(".weather__icon")
const weatherTemperature = _weatherSection.querySelector(
  ".weather__temperature"
)
const weatherUnits = _weatherSection.querySelector(".weather__units")
const weatherDescription = _weatherSection.querySelector(
  ".weather__description"
)

export default {}
