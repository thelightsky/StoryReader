import React,{Component} from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import BaseComponent from '../Base/BaseComponent'

import Queries from '../../Databases/Queries';

export  default class NewStories extends BaseComponent{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});

        this.state={
            dataSource:ds.cloneWithRows(Queries.getStory())
        };
    }
    getTag(){
        return "NewStories";
    }
    gotoStory(data){
        Actions.chaptersPage({StoreyId:data.Id}); 
    }
    createRow(rowData, sectionID, rowID, highlightRow){
        // const gotoStory = () => Actions.chaptersPage({StoreyId:property.Id}); 
        return (
            <TouchableOpacity onPress={(rowData)=> this.gotoStory(rowData)}>
            <View style = {{ backgroundColor:'white',flexDirection: 'row', margin:10 }}>
                <Text style = {{ backgroundColor:'white',flex:1  }}> {rowData.title} </Text>
                <Text> {rowData.author} </Text>
            </View>
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <View> 
                <ListView dataSource={this.state.dataSource} 
                renderRow={(rowData, sectionID, rowID, highlightRow)=> this.createRow(rowData, sectionID, rowID, highlightRow)}/>
            </View>
        );
    }
}