import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Word extends Component {
  render() {
    const {en, vn, isMemorized} = this.props.word;
    return (
      <View style={{flexDirection: 'row'}}>
        <Text> {en} </Text>
        <Text>{isMemorized ? vn : '----'}</Text>
      </View>
    );
  }
}