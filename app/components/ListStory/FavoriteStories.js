import React,{Component} from 'react';
import {View , Text} from 'react-native';
import BaseComponent from '../Base/BaseComponent'
// const Realm = require('realm');

export  default class FavriteStories extends BaseComponent{
    constructor(props) {
      super(props)
    }
    getTag(){
        return "FavriteStories"
    }
    render(){
    // 	let realm = new Realm({ 
    //  	schema: [{name: 'Books', properties: {name: 'string'}}]
	//    });

	//    realm.write(() => {
	//      realm.create('Books', {name: 'Ngoi Nha Ma'});
	//    });
        return(
            <View> 
                <Text> FavriteStories page </Text>
            </View>
        )
    }
}