import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import home from './screen/home'
import end from './screen/end'
import middle from './screen/middle'
import WebViews from './screen/WebViews'
import WebViewss from './screen/WebViewss'

const SwitchNavigator = createStackNavigator({
	home: {
		screen: home
	},
	middle: {
		screen: middle
	},
	end: {
		screen: end
	},
	WebViews: {
		screen: WebViews
	},
	WebViewss: {
		screen: WebViewss
	},
},
{
	initialRouteName: 'home'
}
)

  export default createAppContainer(SwitchNavigator);