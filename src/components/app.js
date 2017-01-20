import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Iphone from './iphone';
import Ipad from './ipad';
//import Forecast from './forecast'
//import Hourly from './hourly'
//import style from './styleIpad'
export default class App extends Component {
//var WeatherApp = React.createClass({
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	handleRoute = e => {
		this.currentUrl = e.url;
	};

    componentDidMount() {
    	const urlBar = window.location.href;
    	if(urlBar.includes("ipad")) {
    		this.setState({
    			"isTablet": true
    		});
    	} else {
    		this.setState({
    			"isTablet": false
    		});
    	}
	}

   	render(){
   		if(this.state.isTablet){
   			return (
			<div id="app">
				<Ipad/ >
	   		</div>   				
   			);
   		} 
   		else {
   			return (
				<div id="app">
					<Iphone/>
	   			</div>
	   		);
   		}
	}
}