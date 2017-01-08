import React,{Component} from 'react';
import {
    View , 
    Text,
TouchableOpacity} from 'react-native';
// const Realm = require('realm');
import BaseComponent from '../Base/BaseComponent'

import Queries from '../../Databases/Queries';

export  default class ListStories extends BaseComponent{
    constructor(props) {
      super(props);
    }
    getTag(){
        return "ListStories";
    }

    AddStory(){
        Queries.AddStory('Bay Vien Ngoc Rong','Oda',new Date());
    }

    render() {
        return(
            <View> 
             <TouchableOpacity onPress={this.AddStory()}>
                <Text> Them story </Text>
              </TouchableOpacity>
            </View>
        )
    }
}