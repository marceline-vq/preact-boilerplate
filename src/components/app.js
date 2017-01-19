import { h, Component } from 'preact';
import { Router } from 'preact-router';

import CurrentConditions from './currentConditions'
//import Forecast from './forecast'
//import Hourly from './hourly'
import style from './style';
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

   	render(){
   		return (
			<div class={ style.main }id="app">
	   			<CurrentConditions/ >
	   			
	   		</div>
	   	);
   	}
}
