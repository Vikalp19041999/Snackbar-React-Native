import React, { Component } from 'react'
import { View, Text } from 'react-native';
import SnackBar, { duration } from 'react-native-snackbar-android'

export default class App extends Component{

  componentDidMount(){
    SnackBar.show({
      message: 'This is a Snackbar',
      backgroundColor: 'red',
      duration: duration.LENGTH_LONG,
      onShow:()=>{console.log("Show")},
      onHide:()=>{console.log("Hide")},
      action:{
        title:'Press me',
        onPress:()=>{alert("You pressed me")}
      }

    })
  }

  render(){
    return(
      <View>
      <Text>Snackbar Demo</Text>
      </View>
    )
  }
}
