import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Weather extends Component {
    render() {
        return (
            <div className="WeatherData">
                {this.props.error &&
                <div className="WeatherData__item WeatherData__item--error">
                    <i className="fas fa-exclamation-circle"></i> {this.props.error}
                </div>}
                <div className="WeatherData__col">
                    {this.props.weather.city && this.props.weather.country &&
                    <div className="WeatherData__item WeatherData__item--location">
                        {this.props.weather.city}, {this.props.weather.country}
                    </div>}
                    {this.props.weather.icon &&
                    <div className="WeatherData__item WeatherData__item--icon">
                        <img src={`http://openweathermap.org/img/w/${this.props.weather.icon}.png`}/>
                    </div>}
                    {this.props.weather.temperature &&
                    <div className="WeatherData__item WeatherData__item--temperature">
                        {this.props.weather.temperature} &deg;C
                    </div>}
                    {this.props.weather.description &&
                    <div className="WeatherData__item WeatherData__item--description">
                        {this.props.weather.description}
                    </div>}
                </div>
                <div className="WeatherData__col WeatherData__col--details">
                    {this.props.weather.temp_min &&
                    <div className="WeatherData__item">
                        Temperature(min): {this.props.weather.temp_min} &deg;C
                    </div>}
                    {this.props.weather.temp_max &&
                    <div className="WeatherData__item">
                        Temperature(max): {this.props.weather.temp_max} &deg;C
                    </div>}
                    {this.props.weather.pressure &&
                    <div className="WeatherData__item">
                        Pressure: {this.props.weather.pressure} hpa
                    </div>}
                    {this.props.weather.humidity &&
                    <div className="WeatherData__item WeatherData__item--humidity">
                        Humidity: {this.props.weather.humidity} %
                    </div>}
                </div>
            </div>
        );
    }
}

export default Weather;
