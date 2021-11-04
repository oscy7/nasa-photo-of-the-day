// import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import BigComponent from './components/componentOne'



function App() {
  const [nasaData, setNasaData] = useState('')
  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=rnBTrhDY0lTA80dKgBcBESX5zleFVY01aYWrR7vd`)
    .then(res => {
      //console.log(res);
      setNasaData(res.data);
      console.log(nasaData)
    })
    .catch(err => {
      console.error(err)
    })
  }, []);

  return (
    <div className="App">
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
        <BigComponent nasaAPI = {nasaData} />
    </div>
    // <div className="App">
    //   <BigComponent nasaAPI = {nasaData} />
    // </div>
  );
}

export default App;
