import React from 'react';
import styled from '@emotion/styled';
import * as weatherElement from './imageResources.jsx';

const WeatherCard = styled.section`
  background-color: rgb(212, 249, 227);
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem 0.8rem 0rem 0.8rem;
  border-radius: 16px;
`;

const Header = styled.header`
  width: 100%;
  height: 20%;
  background-color: rgb(248, 234, 214);
  padding: 4%;
  border-radius: 4px;
`;

const Location = styled.div`
  width: 60%;
  height: 100%;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 2.5rem;
  color:rgb(154, 136, 117);
`;

const Comfort = styled.div`
  width: 40%;
  height: 100%;
  font-size: 1rem;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  color:rgb(154, 136, 117);
`;

const Cog = styled.div`
  cursor: pointer;
  justify-content: flex-end;
  align-items: flex-start;
    &:hover {
      color: hotpink;
      transform: rotate(360deg);
      transition: transform 2s;
    }
`;

const Description = styled.div`
  width: 100%;
  height: 12%;
  background-color: rgb(244, 213, 212);
  justify-content: flex-start;
  padding-left: 5%;
  font-size: 1.2rem;
  border-radius: 4px;
  color:rgb(140, 121, 100);
`;

const CurrentWeather = styled.div`
  width: 100%;
  height: 40%;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: rgb(215, 225, 241);
`;

const AirFlow = styled.div`
  width: 100%;
  height: 12%;
  border-radius: 4px;
  background-color: rgb(248, 234, 214);
  justify-content: flex-start;
  color:rgb(136, 118, 118);
  padding-left: 5%;
`;

const Rain = styled.div`
  width: 100%;
  height: 12%;
  padding-left: 5%;
  background-color: rgb(244, 213, 212);
  border-radius: 4px;
`;

const ObservedTime = styled.div`
width: 100%;
  height: 1.2rem;
  justify-content: flex-end;
  padding-right: 2.5rem;
  color: rgb(142, 122, 100);
`;
export default function WeatherApp() {
  return (
    <WeatherCard>
      <Header>
        <Location>
          台中市
        </Location>
        <Comfort>
          <Cog>
            <weatherElement.FontAwesomeIcon
              icon={weatherElement.faCog}
              // onClick={() => setCurrentPage('WeatherSetting')}
            />
          </Cog>
          舒適
        </Comfort>
      </Header>
      <Description>

      </Description>
      <CurrentWeather>

      </CurrentWeather>
      <AirFlow>

      </AirFlow>
      <Rain>

      </Rain>
      <ObservedTime></ObservedTime>
    </WeatherCard>
  );
}
