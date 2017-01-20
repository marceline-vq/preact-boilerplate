import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';

export default class Ipad extends Component {
//var WeatherApp = React.createClass({
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

    // working example API call to wunderground
    componentDidMount() {
    	var url = "http://api.wunderground.com/api/c78f1a13d2ca6971/conditions/q/UK/London.json";
    	$.ajax({
    		url: url,
    		dataType: "jsonp",
    		success : this.parseResponse
    	})
    }
    render() {
        return (
            <div class={ style.container }>
            	<div class={ style.header }>
 	               	<div class={ style.city }>{ this.state.currentCity }</div>
 	               	<div class={ style.country }>{ this.state.currentCountry }</div>
    	            <div class={ style.conditions }>{ this.state.cond }</div>
        	        <span class={ style.temperature }>{ this.state.temp }</span>
        	    </div>
        	    <div class={ style.details }>
        	    </div>
            </div>
        );
    }
    parseResponse = (parsed_json) => {
        var city = parsed_json['current_observation']['display_location']['city'];
        var country = parsed_json['current_observation']['display_location']['country'];
        var temp_c = parsed_json['current_observation']['temp_c'];
        var conditions = parsed_json['current_observation']['weather'];
        this.setState({
        	currentCity: city,
        	currentCountry: country,
            temp: temp_c,
            cond : conditions
        });      
    }
}