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
    {tieude:"7 Vien Ngoc Rong",Author:"Sky",Id:0},
    {tieude:"One Piece",Author:"Oda",Id:1},
    {tieude:"7 Vien Ngoc Rong GT",Author:"Sky",Id:2},
];
export  default class FavoriteStories extends BaseComponent{
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
    createRow(property){
        const gotoStory = () => Actions.chaptersPage({StoreyId:property.Id}); 
        return (
            <TouchableOpacity onPress={gotoStory}>
            <View>
                <Text> {property.tieude} </Text>
                <Text> {property.Author} </Text>
            </View>
            </TouchableOpacity>
        );
    }

    render(){
        return(
                <View> 
                    <ListView dataSource={this.state.dataSource} 
                    renderRow={this.createRow}/>
                </View>
        );
    }
}