import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import SwipeCards from './app/components/SwipeCards/SwipeCards';

export default class cooltApp extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <SwipeCards />
      </View>
    );
  }
}
AppRegistry.registerComponent('cooltApp', () => cooltApp);