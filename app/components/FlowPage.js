import React,{Component} from 'react';
import {View , Text} from 'react-native';
const Realm = require('realm');

export  class FlowPage extends Component{

    render()
    {
    	let realm = new Realm({
     	schema: [{name: 'Books', properties: {name: 'string'}}]
	   });

	   realm.write(() => {
	     realm.create('Books', {name: 'Ngoi Nha Ma'});
	   });
        return(
                <View> 
                    <Text> Flow page </Text>
                    <Text >
			         	Books Name : {realm.objects('Books').length}
			       	</Text>
                </View>
        );
    }
}