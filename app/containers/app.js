import React, { Component} from 'react'
import { Router, Scene} from 'react-native-router-flux'
import {StyleSheet} from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import ChapterDetailPage from '../components/ChapterDetailPage';
import ChaptersPage from '../components/ChaptersPage';
import HomeView from '../components/HomeView'
var ScrollableTabView = require('react-native-scrollable-tab-view');
// const Realm = require('realm');
import BaseComponent from '../components/Base/BaseComponent'



export default class StoryReader extends BaseComponent {
  constructor(props) {
	  super(props);
	}
	getTag(){
    return "StoryReader";
  }
  render() {
		return(
			<Router>
	      <Scene key="root">
	        <Scene key="homeComponent" hideNavBar={true} component={HomeView} initial={true} />
	        <Scene key="chapterDetailPage" hideNavBar={false} component={ChapterDetailPage} title="Chương 1" />
			  	<Scene key="chaptersPage" hideNavBar={false} component={ChaptersPage} title="Chapters Page" />
	      </Scene>
	    </Router>
		)
	}
}