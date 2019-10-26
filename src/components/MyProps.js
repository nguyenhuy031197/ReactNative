import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class MyProps extends Component {
  render() {
    let word = this.props.word;
    return (
      <View>
        <Text> {word} </Text>
      </View>
    );
  }
}
