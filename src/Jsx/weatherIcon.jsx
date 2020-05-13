import React, { useState, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import * as weatherIcon from './imageResources.jsx';

const IconContainer = styled.div`
  width: 55%;
  height: 90%;
  max-height: 90%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.weatherIcon};
  img {
    width: 85%;
  }
`;

const hours = new Date().getHours();
const isDay = hours > 6 && hours < 18;
const dayOrNight = isDay ? 'day' : 'night';

const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isClear: [1],
  isCloudyFog: [25, 26, 27, 28],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isPartiallyClearWithRain: [
    8, 9, 10, 11, 12, 13,
    14, 19, 20, 29, 30,
    31, 32, 38, 39,
  ],
  isSnowing: [23, 37, 42],
};

const weatherIcons = {
  day: {
    isThunderstorm: weatherIcon.dayThunderstorm,
    isClear: weatherIcon.dayClear,
    isCloudyFog: weatherIcon.dayCloudyFog,
    isCloudy: weatherIcon.dayCloudy,
    isFog: weatherIcon.dayFog,
    isPartiallyClearWithRain: weatherIcon.dayPartiallyClearWithRain,
    isSnowing: weatherIcon.daySnowing,
  },
  night: {
    isThunderstorm: weatherIcon.nightThunderstorm,
    isClear: weatherIcon.nightClear,
    isCloudyFog: weatherIcon.nightCloudyFog,
    isCloudy: weatherIcon.nightCloudy,
    isFog: weatherIcon.nightFog,
    isPartiallyClearWithRain: weatherIcon.nightPartiallyClearWithRain,
    isSnowing: weatherIcon.nightSnowing,
  },
};

function matchImageNumber(wINumber) {
  return Object.entries(weatherTypes).reduce(
    (currentWeatherType, [weatherType, weatherImageNumbers]) => (
      weatherImageNumbers.includes(Number(wINumber))
        ? weatherType
        : currentWeatherType
    ),
    '',
  );
}

export default function WeatherIcon(props) {
  const { weatherImageNumber } = props;
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState(null);

  const currentWeatherType = useMemo(
    () => matchImageNumber(weatherImageNumber),
    [weatherImageNumber],
  );

  useEffect(() => {
    setCurrentWeatherIcon(currentWeatherType);
  }, [currentWeatherType]);

  return (
    <IconContainer>
      <img
        src={weatherIcons[dayOrNight][currentWeatherIcon]}
        alt="weather"
      />
    </IconContainer>
  );
}
