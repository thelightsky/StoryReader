import React, { Component} from 'react'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import StoryReader from './containers/app'

function setup(): ReactClass<{}> {
	class Root extends Component {
		render() {
			return(
				<Provider store={configureStore()}>
					<StoryReader />
				</Provider>
			)
		}
	}

	return Root
}

module.exports = setup;