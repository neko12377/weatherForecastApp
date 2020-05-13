import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import useWeatherAPI from './useWeatherAPI';
import { findRegion } from './Region';
import WeatherCardWrapper from './WeatherCard.jsx';
import WeatherSetting from './WeatherSetting.jsx';

const theme = {
  light: {
    background: '#d4f9e3',
    header: '#f8ead6',
    cogHover: 'hotpink',
    changeThemeColor: '#aaaafa',
    changeThemeBackground: '#98dfaf',
    changeThemeButton: '',
    description: '#f4d5d4',
    currentWeather: '#d7e1f1',
    degree: 'rgb(196, 214, 209)',
    weatherIcon: 'rgb(169, 169, 218)',
    windSpeed: 'rgb(248, 234, 214)',
    rain: 'rgb(244, 213, 212)',
    reload: 'rgb(212, 249, 227)',
    reloadHover: 'rgb(182, 238, 205)',
    fontColor: 'rgb(154, 136, 117)',
    borderBottom: '',
  },
  dark: {
    background: '#223475',
    header: '#46568f',
    cogHover: '#ffffff',
    changeThemeColor: '#666666',
    changeThemeBackground: '#243671',
    changeThemeButton: 'translateX(1.5rem)',
    description: '#46568f',
    currentWeather: '#46568f',
    degree: '',
    weatherIcon: '',
    windSpeed: '#46568f',
    rain: '#46568f',
    reload: '#223475',
    reloadHover: '#151d4d',
    fontColor: 'rgb(200, 200, 200)',
    borderBottom: '#223475 solid 3px',
  },
};

export default function WeatherApp() {
  const storageCity = localStorage.getItem('cityName');
  const [currentCity, setCurrentCity] = useState(storageCity || '臺中市');
  const currentRegion = findRegion(currentCity) || {};
  const [weatherElement, fetchData] = useWeatherAPI(currentRegion);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState('WeatherCard');

  const changeTheme = () => (
    currentTheme === 'light'
      ? setCurrentTheme('dark')
      : setCurrentTheme('light')
  );

  const showSettingPage = () => (
    currentPage === 'WeatherCard'
      ? setCurrentPage('WeatherSetting')
      : setCurrentPage('WeatherCard')
  );

  useEffect(() => {
    localStorage.setItem('cityName', currentCity);
  }, [currentCity]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      {currentPage === 'WeatherCard'
        ? (
          <WeatherCardWrapper
            cityName={currentRegion.cityName}
            weatherElement={weatherElement}
            fetchData={fetchData}
            changeTheme={changeTheme}
            showSettingPage={showSettingPage}
          />
        )
        : (
          <WeatherSetting
            cityName={currentRegion.cityName}
            setCurrentCity={setCurrentCity}
            showSettingPage={showSettingPage}
          />
        )}
    </ThemeProvider>
  );
}
