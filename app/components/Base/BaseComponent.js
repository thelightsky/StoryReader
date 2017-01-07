import React , { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class BaseComponent extends Component{
  getTag(){
    return "BaseComponent";
  }
  constructor (props) {
    super(props);
    console.log(this.getTag(), '==> constructor ');
  }
  componentDidMount () {
    console.log(this.getTag(), '==> componentDidMount ');
  }
  componentWillMount() {
    //console.log(this.getTag(),'==> componentWillMount ');
  }
  componentWillReceiveProps(){
    //console.log(this.getTag(),'==> componentWillReceiveProps ');
  }
  componentWillUpdate(){
    //console.log(this.getTag(),'==> componentWillUpdate ');
  }
  componentWillUnmount () {
    console.log(this.getTag(),'==> componentWillUnmount ');
  }
}