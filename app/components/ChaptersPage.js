import React,{Component} from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import BaseComponent from './Base/BaseComponent'

var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});

export  default class ChaptersPage extends BaseComponent{
    constructor(props){
        
        super(props);


        var Data = this.loadData(props.StoreyId);
        this.state={
            dataSource:ds.cloneWithRows(Data)
        };
    }

    getTag(){
        return "ChaptersPage";
    }
   loadData(Id){
        var DATA = [
            {tieude:"Chương 1",ChapterId:0,storyId:Id},
            {tieude:"Chương 1",ChapterId:1,storyId:Id},
            {tieude:"Chương 1",ChapterId:2,storyId:Id},
            {tieude:"Chương 1",ChapterId:3,storyId:Id},
            {tieude:"Chương 1",ChapterId:4,storyId:Id},
            {tieude:"Chương 1",ChapterId:5,storyId:Id},
            {tieude:"Chương 1",ChapterId:6,storyId:Id},
            {tieude:"Chương 1",ChapterId:7,storyId:Id},
            {tieude:"Chương 1",ChapterId:8,storyId:Id},
            {tieude:"Chương 1",ChapterId:9,storyId:Id},
            {tieude:"Chương 1",ChapterId:10,storyId:Id},
            {tieude:"Chương 1",ChapterId:11,storyId:Id},
            {tieude:"Chương 1",ChapterId:12,storyId:Id},
            
        ];
        return DATA;
    }

    createRow(property){
        const gotoChapter = () => Actions.chapterDetailPage({storyId:property.storyId,chapterId:property.ChapterId}); 
        return (
            <TouchableOpacity onPress={gotoChapter}>
            <View style = {{ backgroundColor:'white',flexDirection: 'row', margin:10 }}>
                <Text> {property.tieude} - {property.ChapterId}</Text>
            </View>
            </TouchableOpacity>
        );
    }

    render(){
        return(
                <View  style={{marginTop: 50}}> 
                    <ListView dataSource={this.state.dataSource} 
                    renderRow={this.createRow}/>
                </View>
        );
    }
}