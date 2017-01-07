
import React, { Component} from 'react'
import ScrollableTabView  from 'react-native-scrollable-tab-view'

import ListStories from './ListStory/ListStories'
import NewStories from './ListStory/NewStories'
import FavoriteStories from './ListStory/FavoriteStories'
import BaseComponent from './Base/BaseComponent'
export default class HomeView extends BaseComponent {
  constructor(props) {
	  super(props);
	}
	getTag(){
    return "HomeView";
  }
  render() {
		return(
			<ScrollableTabView>
        <NewStories tabLabel="Truyen" />
        <FavoriteStories tabLabel="Yêu Thích" />
        <ListStories tabLabel="Trang chủ" />
      </ScrollableTabView>
		)
	}
}