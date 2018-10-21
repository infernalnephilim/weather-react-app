import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const API_KEY = "";

class App extends React.Component {
    state = {
        weather: {
            city: undefined,
            country: undefined,
            temperature: undefined,
            temp_min: undefined,
            temp_max: undefined,
            pressure: undefined,
            humidity: undefined,
            description: undefined,
            icon: undefined
        },
        error: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        if (city && country) {
            const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
            const data = await apiCall.json();
            if(data.hasOwnProperty("cod") && data.cod === "404"){
                this.setState({
                    weather: {
                        city: undefined,
                        country: undefined,
                        temperature: undefined,
                        temp_min: undefined,
                        temp_max: undefined,
                        pressure: undefined,
                        humidity: undefined,
                        description: undefined,
                        icon: undefined
                    },
                    error: "Cannot find this location. Please enter valid data."
                });
            } else{
                console.log(data);
                this.setState({
                    weather: {
                        city: data.name,
                        country: data.sys.country,
                        temperature: data.main.temp,
                        temp_min: data.main.temp_min,
                        temp_max: data.main.temp_max,
                        pressure: data.main.pressure,
                        humidity: data.main.humidity,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon
                    },
                    error: undefined
                });
            }

        } else {
            this.setState({
                weather: {
                    city: undefined,
                    country: undefined,
                    temperature: undefined,
                    temp_min: undefined,
                    temp_max: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    description: undefined,
                    icon: undefined
                },
                error: "Please enter both values."
            });
        }
    };

    render() {
        return (
            <div className="WeatherApp">
                <Header/>
                <div className="WeatherApp__content">
                    <Form getWeather={this.getWeather}/>
                    <Weather weather={this.state.weather} error={this.state.error}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
