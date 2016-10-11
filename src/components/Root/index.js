import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TabBarIOS,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import * as appActions from '../../common/app'
import * as userActions from '../../common/user'
import styles from './styles'

class Root extends Component {
  render() {
    const { activeTab, changeTab, changeName, name } = this.props

    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='Blue Tab'
          systemIcon='history'
          selected={activeTab === 'home'}
          onPress={() => { changeTab('home') }}
        >
          <View style={styles.container}>
            <Text>Hi {name}!</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='Blue Tab'
          systemIcon='contacts'
          selected={activeTab === 'settings'}
          onPress={() => { changeTab('settings') }}
        >
          <View style={styles.container}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 295, marginLeft: 40}}
              onChangeText={(text) => changeName(text)}
              value={name}
            />
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

export default connect(state => ({
  activeTab: state.app.activeTab,
  name: state.user.name
}), { ...appActions, ...userActions })(Root);
