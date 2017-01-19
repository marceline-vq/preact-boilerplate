import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';

export default class CurrentConditions extends Component {
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
    		success : (parsed_json) => {
				var location = parsed_json['current_observation']['display_location']['city'];
  				var temp_c = parsed_json['current_observation']['temp_c'];
  				var conditions = parsed_json['current_observation']['weather'];
  				this.setState({
          			locate: location,
          			temp: temp_c,
                tempSign : "º",
          			cond : conditions
    			});
    		}
    	})
    }
    
    render() {
        return (
            <div class={ style.current }>
                <div class={ style.location }>{ this.state.locate }</div>
                <div class={ style.conditions }>{ this.state.cond }</div>
                <span class={ style.temperature }>{ this.state.temp }</span>
                <span class={ style.sign }>{ this.state.tempSign }</span>

            </div>
        );
    }
}