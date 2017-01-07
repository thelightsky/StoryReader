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

var DATA = [
    {tieude:"7 Vien Ngoc Rong",Author:"Sky",Id:0},
    {tieude:"One Piece",Author:"Oda",Id:1},
    {tieude:"7 Vien Ngoc Rong GT",Author:"Sky",Id:2},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong Z",Author:"Sky",Id:3},
    {tieude:"7 Vien Ngoc Rong",Author:"Sky",Id:0},
    {tieude:"One Piece",Author:"Oda",Id:1},
    {tieude:"7 Vien Ngoc Rong GT",Author:"Sky",Id:2},
];
export  default class NewStories extends BaseComponent{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});

        this.state={
            dataSource:ds.cloneWithRows(DATA)
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
                <Text style = {{ backgroundColor:'white',flex:1  }}> {rowData.tieude} </Text>
                <Text> {rowData.Author} </Text>
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