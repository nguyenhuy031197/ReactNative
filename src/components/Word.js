import React, {Component} from 'react';;
import {Text, View} from 'react-native';;

export default class Word extends Component {
  render() {
    const en = this.props.word.en;
    const vn = this.props.word.vn;
    return (
      <View style={{flexDirection: 'row'}}>
        <Text> {en} </Text>
        <Text> {vn} </Text>
      </View>
    );
  }
}
