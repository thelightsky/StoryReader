import React,{Component} from 'react';
import {View , Text} from 'react-native';
// const Realm = require('realm');
import BaseComponent from '../Base/BaseComponent'

export  default class ListStories extends BaseComponent{
    constructor(props) {
      super(props);
    }
    getTag(){
        return "ListStories";
    }
    render() {
        return(
            <View> 
                <Text> ListStories page </Text>
            </View>
        )
    }
}