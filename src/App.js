import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import FoodDetection from './components/FoodDetection/FoodDetection';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  data: [],
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  fetchData = (data) => {
    let myArray = [];
    data.outputs[0].data.concepts.slice(0,5).forEach(element => {myArray.push(element.name)});
    return myArray;
  }

  displayData = (fetchedData) => {
    this.setState({data: fetchedData});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    const PAT = '97302d14698c435fa9e6e0cdf484252b';
    const USER_ID = 'x88eu358xrhw';       
    const APP_ID = '55c0d13af0c44ab2aa27fa2b39fa4add';
    const MODEL_ID = 'food-item-recognition';   
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => this.displayData(this.fetchData(result)))
        .catch(error => console.log('error', error));
  }

  render() {
    const { imageUrl, data } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="particles" bg={true} />
        <div>
          <Logo />
          <ImageLink
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FoodDetection data={data} imageUrl={imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
