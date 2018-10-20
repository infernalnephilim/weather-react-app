import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <header className="WeatherApp__header">
                <h1>Weather App</h1><img src="favicon.png"/>
            </header>
        );
    }
}

export default Header;
