/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{flex: 1, backgroundColor: 'red', flexDirection: 'column'}}>
          <Text
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              color: 'black',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            A
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: 'green',
              color: 'black',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            B
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: 'gray',
              color: 'black',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            C
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: 'pink',
              color: 'black',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            D
          </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue'}} />
      </View>
    );
  }
}

export default App;

