import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './Jsx/WeatherApp.jsx';
import './index.scss';

function App() {
  return <WeatherApp />;
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement,
);
