import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './components/header';
import About from './components/about';
import './Style/style.css';
import './App.css';
import Project from './components/project';
import Contact from './components/form';

const App = () => {
  const [data, setData] = useState({
    foo: 'bar',
    dB: {},
  });

  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
    getDB();
  }, []);

  const getDB = () => {
    $.ajax({
      url: './dB.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        setData((prevState) => ({
          ...prevState,
          dB: data,
        }));
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  };

  return (
    <div className="App">
      <Header data={data.dB.main} />
      <About data={data.dB.main} />
      <Project data={data.dB.project} />
      <Contact data={data.dB.main} />
    </div>
  );
};

export default App;
