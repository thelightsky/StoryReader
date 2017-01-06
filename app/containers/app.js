import React, { Component} from 'react'
import { Router, Scene} from 'react-native-router-flux'
import {StyleSheet} from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import {FlowPage} from '../components/FlowPage';
import {ChapterDetailPage} from '../components/JestPage';
import {ReactPage} from '../components/ReactPage';
import {ChaptersPage} from '../components/StoryChapters';

var ScrollableTabView = require('react-native-scrollable-tab-view');
// const Realm = require('realm');

class HomeComponent extends Component {
    constructor(props) {
	  super(props);
	}

    render() {
		return(
			
			<ScrollableTabView>
	            <ReactPage tabLabel="Trang chủ" />
	            <FlowPage tabLabel="Yêu Thích" />
        	</ScrollableTabView>
		)
	}
}

export default class StoryReader extends Component {
    constructor(props) {
	  super(props);
	}

    render() {
		return(
			<Router>
        <Scene key="root">
          <Scene key="homeComponent" hideNavBar={true} component={HomeComponent} initial={true} />
          <Scene key="chapterDetailPage" hideNavBar={false} component={ChapterDetailPage} title="Chương 1" />
		  <Scene key="chaptersPage" hideNavBar={false} component={ChaptersPage} title="Chapters Page" />
        </Scene>
      </Router>
		)
	}
}