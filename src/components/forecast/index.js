import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';

export default class Forecast extends Component {

	componentDidMount() {
		var imgPath = "../../assets/";
    	var url = "http://api.wunderground.com/api/c78f1a13d2ca6971/forecast10day/q/UK/London.json";
    	$.ajax({
    		url: url,
    		dataType: "jsonp",
    		success : (parsed_json) => {
    			// array[] for a certain period
    			var day = parsed_json['forecast']['simpleforecast']['forecastday'][0]['date']['weekday'];
				var dayHigh = parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['celsius'];
				var dayLow = parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['celsius'];
				var day2 = parsed_json['forecast']['simpleforecast']['forecastday'][1]['date']['weekday'];
				var day2High = parsed_json['forecast']['simpleforecast']['forecastday'][1]['high']['celsius'];
				var day2Low = parsed_json['forecast']['simpleforecast']['forecastday'][1]['low']['celsius'];
				var day2Cond = parsed_json['forecast']['simpleforecast']['forecastday'][1]['conditions'];

				var day3 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['date']['weekday'];
				var day3High = parsed_json['forecast']['simpleforecast']['forecastday'][2]['high']['celsius'];
				var day3Low = parsed_json['forecast']['simpleforecast']['forecastday'][2]['low']['celsius'];
				var day3Cond = parsed_json['forecast']['simpleforecast']['forecastday'][3]['conditions'];


				var day4 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['date']['weekday'];
				var day5 = parsed_json['forecast']['simpleforecast']['forecastday'][4]['date']['weekday'];
				var day6 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['date']['weekday'];
				var day7 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['date']['weekday'];
				var day8 = parsed_json['forecast']['simpleforecast']['forecastday'][7]['date']['weekday'];
				var day9 = parsed_json['forecast']['simpleforecast']['forecastday'][8]['date']['weekday'];
				var day10 = parsed_json['forecast']['simpleforecast']['forecastday'][9]['date']['weekday'];
  				this.setState({
          			currentDay: day,
          			highTemp: dayHigh,
          			lowTemp : dayLow,
          			nextDay: day2,
          			nextDayHighTemp : day2High,
          			nextDayLowTemp : day2Low,
          			nextDayCond : day2Cond
    			});
    		}
    	})
    }
    render() {
    	var imgPath = "../../assets/";
        return (
        	<div>
	            <div class={ style.today }>
    	            <span>{ this.state.currentDay }</span>
    	            <span>Today</span>
        	        <span>{ this.state.highTemp }</span>
            	    <span>{ this.state.lowTemp }</span>
            	</div>
                <div class={ style.nextDays }>
                	<span>{ this.state.nextDay }</span>
                	<img src={ imgPath+this.state.nextDayCond+".png" }/>
                	<span>{ this.state.nextDayHighTemp }</span>
                	<span>{ this.state.nextDayLowTemp }</span>
                </div> 
            </div>
        );
    }

}