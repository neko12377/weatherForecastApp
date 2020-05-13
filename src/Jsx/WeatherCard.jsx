import React from 'react';
import WeatherIcon from './weatherIcon.jsx';
import * as weatherIcon from './imageResources.jsx';
import * as styles from './Styles/WeatherAppStyles.jsx';

const {
  WeatherCard,
  Header,
  City,
  Location,
  Comfort,
  Cog,
  ChangeTheme,
  Description,
  CurrentWeather,
  Degree,
  Celsius,
  AirFlow,
  WindIcon,
  WindDescription,
  Rain,
  RainIcon,
  RainPosibility,
  Reload,
  ReloadIcon,
  ObservedTime,
} = styles;

export default function WeatherCardWrapper(props) {
  const {
    weatherElement, fetchData, changeTheme, showSettingPage, cityName,
  } = props;

  const {
    observationTime,
    locationName,
    description,
    iconsCode,
    temperature,
    windSpeed,
    humidity,
    rainPossibility,
    comfort,
    isLoading,
  } = weatherElement;

  return (
    <WeatherCard>
      <Header>
        <City>
          <Cog
            onClick={showSettingPage}
          />
          {cityName}
        </City>
        <Location>
          {locationName}
        </Location>
        <Comfort>
          <ChangeTheme
            onClick={changeTheme}
          >
            <div />
          </ChangeTheme>
          {comfort}
        </Comfort>
      </Header>
      <Description>
        {description}
      </Description>
      <CurrentWeather>
        <Degree>
          {Math.round(temperature)}
          <Celsius>°C</Celsius>
        </Degree>
        <WeatherIcon
          weatherImageNumber={iconsCode}
        />
      </CurrentWeather>
      <AirFlow>
        <WindIcon>
          <img
            src={weatherIcon.windSpeed}
            alt="wind speed"
          />
        </WindIcon>
        <WindDescription>
          {`${windSpeed} m/s`}
        </WindDescription>
      </AirFlow>
      <Rain>
        <RainIcon>
          <img
            src={weatherIcon.rainRate}
            alt="rain rate"
          />
        </RainIcon>
        <RainPosibility>
          {`${rainPossibility} %`}
        </RainPosibility>
        <RainIcon>
          <img
            src={weatherIcon.humidity}
            alt="humidity"
          />
        </RainIcon>
        <styles.humidity>
          {`${humidity} %`}
        </styles.humidity>
        <Reload>
          <ReloadIcon
            onClick={fetchData}
            isLoading={isLoading}
          >
            <weatherIcon.faSolid.SyncAlt size={20} />
          </ReloadIcon>
        </Reload>
      </Rain>
      <ObservedTime>
        {
          new Intl.DateTimeFormat(
            'zh-TW',
            {
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              year: 'numeric',
              weekday: 'long',
              hour12: false,
            },
          )
            .format(new Date(observationTime))
        }
      </ObservedTime>
    </WeatherCard>
  );
}
