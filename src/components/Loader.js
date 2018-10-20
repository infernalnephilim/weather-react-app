import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Loader extends Component {
    render() {
        return (

            <div className="WeatherApp__loader">
                {this.props.isLoading && <p>Loading...</p>}
            </div>
        );
    }
}

export default Loader;
