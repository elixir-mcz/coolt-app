import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Cards from './app/components/SwipeCards/SwipeCards';

export default class cooltApp extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <Cards />
      </View>
    );
  }
}
AppRegistry.registerComponent('cooltApp', () => cooltApp);