import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Form extends Component {
    render() {
        return (
            <div className="WeatherApp__form">
                <form className="WeatherApp-form" onSubmit={this.props.getWeather}>
                    <div className="WeatherApp-form__row">
                        <label>City:</label>
                        <input type="text" name="city"/>
                    </div>
                    <div className="WeatherApp-form__row">
                        <label>Country:</label>

                        <input type="text" name="country"/>
                    </div>
                    <div className="WeatherApp-form__row">
                        <button>Show weather</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
