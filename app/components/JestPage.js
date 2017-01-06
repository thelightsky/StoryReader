import React,{Component} from 'react';
import {View , Text} from 'react-native';


export  class ChapterDetailPage extends Component{

    constructor(props)
    {
        super(props);
        this.state = {content:""};
        this.state.content = "Cau Chuyen:" + props.storyId + "==> Noi dung cua chuong " + props.chapterId;
        

    }
    render()
    {
        return(
                <View style={{marginTop: 50}}> 
                    <Text>{this.state.content}</Text>
                </View>
        );
    }
}