import React, { Component} from 'react'
import { Router, Scene} from 'react-native-router-flux'
import {StyleSheet} from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import {FlowPage} from '../components/FlowPage';
import {JestPage} from '../components/JestPage';
import {ReactPage} from '../components/ReactPage';

var ScrollableTabView = require('react-native-scrollable-tab-view');
// const Realm = require('realm');


export default class StoryReader extends Component {
    constructor(props) {
	  super(props);
	}

    render() {
		return(
			<ScrollableTabView>
	            <ReactPage tabLabel="React" />
	            <FlowPage tabLabel="Flow" />
	            <JestPage tabLabel="Jest" />
        	</ScrollableTabView>
		)
	}
}