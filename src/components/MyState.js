/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Myfunction from './Myfunction';

export default class MyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  inCrease() {
    this.setState({count: this.state.count + 1});
  }
  deCrease() {
    this.setState({count: this.state.count - 1});
  }
  reset() {
    this.setState({count: 0});
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 40}}>
          Count : {this.state.count}
        </Text>
        <Myfunction />
      </View>
    );
  }
}