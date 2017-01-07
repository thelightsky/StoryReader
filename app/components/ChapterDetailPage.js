import React,{Component} from 'react';
import {View , Text} from 'react-native';

import BaseComponent from './Base/BaseComponent'

export  default  class ChapterDetailPage extends BaseComponent{

    constructor(props){
        super(props);
        this.state = {content:""};
        this.state.content = "Cau Chuyen:" + props.storyId + "==> Noi dung cua chuong " + props.chapterId;
        
    }
    getTag(){
        return "ChapterDetailPage";
    }
    render(){
        return(
                <View style={{marginTop: 50}}> 
                    <Text>{this.state.content}</Text>
                </View>
        );
    }
}