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
    </WeatherCard>
  );
}
