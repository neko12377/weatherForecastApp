import { useState, useCallback, useEffect } from 'react';

function fetchCurrentWeather(locationName) {
  return fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-D5501964-97E5-4250-B4C0-0D877E8B7FAB')
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location.find((item) => item.locationName === locationName);
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },
        {},
      );

      return {
        observationTime: locationData.time.obsTime,
        city: locationData.parameter[0].parameterValue,
        locationName: locationData.parameter[2].parameterValue,
        windSpeed: weatherElements.WDSD,
        temperature: weatherElements.TEMP,
        humidity: Math.round(weatherElements.HUMD * 100),
      };
    });
}

function fetchWeatherForecast(cityName) {
  return fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-D5501964-97E5-4250-B4C0-0D877E8B7FAB')
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location.find((element) => element.locationName === cityName);
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
            neededElements[item.elementName] = item.time[0].parameter;
          }
          return neededElements;
        },
        {},
      );
      console.log(locationData);
      return {
        description: weatherElements.Wx.parameterName,
        iconsCode: weatherElements.Wx.parameterValue,
        rainPossibility: weatherElements.PoP.parameterName,
        comfort: weatherElements.CI.parameterName,
      };
    });
}

export default function useWeatherAPI(currentRegion) {
  const [weatherElement, setWeatherElement] = useState({
    observationTime: null,
    city: null,
    locationName: null,
    description: null,
    iconsCode: null,
    temperature: null,
    windSpeed: null,
    humidity: null,
    rainPossibility: null,
    comfort: null,
    isLoading: true,
  });

  const { cityName, locationName } = currentRegion;

  const fetchData = useCallback(
    () => {
      const fetchingData = async () => {
        const [currentWeather, weatherForecast] = await Promise.all([
          fetchCurrentWeather(locationName),
          fetchWeatherForecast(cityName),
        ]);

        setWeatherElement({
          ...currentWeather,
          ...weatherForecast,
          isLoading: false,
        });
      };

      setWeatherElement((prevs) => (
        {
          ...prevs,
          isLoading: true,
        }
      ));

      fetchingData();
    },
    [locationName, cityName],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [weatherElement, fetchData];
}
