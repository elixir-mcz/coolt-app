import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class cooltApp extends Component{
  render(){
    return(
      <View>
        <Text>Index</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('cooltApp', () => cooltApp);