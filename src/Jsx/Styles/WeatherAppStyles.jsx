import styled from '@emotion/styled';
import * as weatherIcon from '../imageResources.jsx';

const WeatherCard = styled.main`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
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
  background-color: ${({ theme }) => theme.header};;
  padding: 2% 0 0 0;
  border-radius: 8px 8px 0 0 ;
  border-bottom: ${({ theme }) => theme.borderBottom};
`;

const City = styled.div`
  width: 43%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 2.5rem;
`;

const Location = styled.section`
  width: 20%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 1.2rem;
`;

const Comfort = styled.div`
  width: 30%;
  height: 100%;
  font-size: 1rem;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const Cog = styled(weatherIcon.faSolid.Cog)`
  cursor: pointer;
  justify-content: flex-end;
  align-items: flex-start;
  width: 1rem;
  height: 1rem;
  margin: 0;
  &:hover {
      color: ${({ theme }) => theme.cogHover};
      transform: rotate(720deg);
      transition: transform 3.5s;
    }
`;

const ChangeTheme = styled.div`
  cursor: pointer;
  justify-content: flex-start;
  align-items: flex-start;
  width: 3rem;
  height: 1.5rem;
  margin: 0;
  background-color: ${({ theme }) => theme.changeThemeBackground};
  border-radius: 30px;
  div {
    width: 1.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.changeThemeColor};
    transition: transform 0.6s;
    transform: ${({ theme }) => theme.changeThemeButton};
  }
`;

const Description = styled.section`
  width: 100%;
  height: 12%;
  background-color: ${({ theme }) => theme.description};
  justify-content: flex-start;
  padding-left: 5%;
  font-size: 1.2rem;
  border-bottom: ${({ theme }) => theme.borderBottom};
`;

const CurrentWeather = styled.section`
  width: 100%;
  height: 40%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.currentWeather};
  border-bottom: ${({ theme }) => theme.borderBottom};
`;

const Degree = styled.div`
  width: 55%;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.degree};
  font-size: 4rem;
`;

const Celsius = styled.div`
  width: 25%;
  font-size: 2rem;
  font-weight: 900;
  align-items: flex-start;
  padding-top: 2.5rem;
`;

const AirFlow = styled.section`
  width: 100%;
  height: 12%;
  background-color: ${({ theme }) => theme.windSpeed};
  justify-content: flex-start;
  padding-left: 5%;
  border-bottom: ${({ theme }) => theme.borderBottom};
`;

const WindIcon = styled.div`
  width: 15%;
  justify-content: flex-start;
  img {
    width: 2.5rem;
  }
`;

const WindDescription = styled.div`
  width:  80%;
  height: 100%;
  justify-content: flex-start;
`;

const Rain = styled.section`
  width: 100%;
  height: 12%;
  padding-left: 5%;
  background-color: ${({ theme }) => theme.rain};
  border-radius: 0 0 8px 8px;
`;

const RainIcon = styled.div`
  width: 15%;
    justify-content: flex-start;
    img {
      width: 2rem;
    }
`;

const RainPosibility = styled.div`
  width: 35%;
    height: 100%;
    justify-content: flex-start;
`;

const humidity = styled.div`
  width: 20%;
    height: 100%;
    justify-content: flex-start;
`;

const Reload = styled.div`
  display: block;
  width: 10%;
  height: 100%;
`;

const ReloadIcon = styled.div`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.reload};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  top: 1.8rem;
  left: 0.8rem;
  outline: none;
    &:hover {
    background-color: ${({ theme }) => theme.reloadHover};
    cursor: pointer;
  }
  &:focus {
    transform: rotate(360deg);
    transition: transform 2s;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: rotate infinite ${({ isLoading }) => (isLoading ? '1.5s' : '0')} linear;
`;

const ObservedTime = styled.footer`
width: 100%;
  height: 1.2rem;
  justify-content: flex-end;
  padding-right: 2.5rem;
  color: rgb(142, 122, 100);
`;

export {
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
  humidity,
  RainPosibility,
  Reload,
  ReloadIcon,
  ObservedTime,
};
