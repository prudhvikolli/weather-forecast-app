import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { cities, days, months } from './constants';
import Select from 'react-select';
const API_KEY = '371d4e84f04f4e6eafe38174f3de11e5';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const options = useMemo(() => cities, []);
  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        opacity: 0.8,
        fontSize: '28 px',
      }),
      control: (provided) => ({
        ...provided,
        fontSize: '28 px',
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
        fontSize: '28 px',
      }),
    }),
    []
  );
  const [city, setCity] = useState('Toronto');

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setData(response?.data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
    return () => {
      //
    };
  }, [city]);

  const onChange = (e) => {
    setCity(e?.value);
  };

  console.log(data);
  return (
    <div className="App">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand color={'white'}>
          <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
            Weather Forecast
          </div>
        </NavbarBrand>
      </Navbar>
      <br />
      <div> {'City'}</div>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <Select
          options={options}
          onChange={onChange}
          defaultValue={options[0]}
          styles={customStyles}
        />
      </div>
      <br /> <br />
      <div
        style={{
          display: 'flex',
          width: '75%',
          margin: '0 auto',
          overflow: 'scroll',
        }}
      >
        {data?.map((item) => (
          <div key={item.datetime} style={{}}>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {' '}
              {months[new Date(item.datetime).getMonth()] +
                ' ' +
                new Date(item.datetime).getDate()}
            </div>
            <div> {days[new Date(item.datetime).getDay()]}</div>
            <img
              src={require(`./icons/${[item?.weather?.icon]}.png`)}
              alt="nothing"
            />
            <div style={{ fontSize: '18px' }}> {item.temp + '\u00b0 C'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
