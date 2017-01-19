import { h, render, Component } from 'preact';
import $ from 'jquery';
import style from './style';

export default class Hourly extends Component {
	componentDidMount() {
    	var url = "http://api.wunderground.com/api/c78f1a13d2ca6971/hourly/q/UK/London.json";
    	$.ajax({
    		url: url,
    		dataType: "jsonp",
    		success : (parsed_json) => {
    			// array[] for a certain period
    			var nowTime = parsed_json['hourly_forecast'][0]['FCTTIME']['civil'];	
                var nowTemp = parsed_json['hourly_forecast'][0]['temp']['metric'];    
                var oneHourLater = parsed_json['hourly_forecast'][1]['FCTTIME']['civil'];
                var oneHourLaterTemp = parsed_json['hourly_forecast'][1]['temp']['metric'];
				console.log(nowTemp);
  				this.setState({
          			timeNow: nowTime,
                    tempNow: nowTemp+"º",   
                    timeOneHLater : oneHourLater,
                    tempOneHLater: oneHourLaterTemp+"º"
    			});
    		},
            error : function(){
                console.log("welp. something went wrong.")
            }
    	})
    }
    render() {
        return (
            <div class={ style.hourly }>
                <div>
                    { this.state.timeNow }
                    { this.state.tempNow }
                </div>
                <span class>{ this.state.timeOneHLater }</span>
                <span class>{ this.state.tempOneHLater }</span>
            </div>
        );
    }
}