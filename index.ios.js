import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import configureStore from './src/common/configureStore'
import Root from './src/components/Root'

const store = configureStore()

class App extends Component {
  render() {
    return <Root store={store} />
  }
}

AppRegistry.registerComponent('newstoretest', () => App)
