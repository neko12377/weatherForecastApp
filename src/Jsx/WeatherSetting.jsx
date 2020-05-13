import React, { useState } from 'react';
import styled from '@emotion/styled';
import { availableRegions } from './Region';

const Container = styled.main`
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Body = styled.section`
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 250px;
  padding: 2% 4%;
  border-radius: 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 28%;
  color: white;
  font-size: 1.8rem;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 22%;
  color: white;
  font-size: 1.5rem;
`;

const StyledInputBox = styled.input`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 18%;
  background-color: #171717;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  padding-left: 2%;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32%;
  button {
    display: flex;
    cursor: pointer;
    justify-content: center;
    font-size: 1rem;
    width: 25%;
    height: 50%;
    border-radius: 8px;
  }
`;

const Goback = styled.button`
  background-color: #171717;
  color: white;
  border: 1px white solid;
`;

const Save = styled.button`
  background-color: #5aa8ed;
  color: white;
  border: 0;
`;

const locations = availableRegions.map((location) => location.cityName);

const listItems = locations.map((listItem) => <option key={`${listItem}`} value={listItem} />);

export default function WeatherSetting({ showSettingPage, cityName, setCurrentCity }) {
  const [locationName, setLocationName] = useState(cityName);

  const handleChange = (e) => {
    setLocationName(e.target.value);
  };

  const handleSave = () => {
    if (locations.includes(locationName)) {
      setCurrentCity(locationName);
      showSettingPage('WeatherCard');
    } else {
      alert(`儲存失敗：您輸入的 ${locationName} 並非有效地區`);
    }
  };

  return (
    <Container>
      <Body>
        <Header>
          設定
        </Header>
        <StyledLabel
          htmlFor="location"
        >
          地區
        </StyledLabel>
        <StyledInputBox
          name="location"
          id="location"
          list="locationList"
          onChange={handleChange}
        />
        <datalist id="locationList">
          {listItems}
        </datalist>
        <Footer>
          <Goback
            onClick={showSettingPage}
          >
            返回
          </Goback>
          <Save
            onClick={handleSave}
          >
            儲存
          </Save>
        </Footer>
      </Body>
    </Container>
  );
}
