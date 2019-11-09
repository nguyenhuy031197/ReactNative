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
    this.onInCrease = this.onInCrease.bind(this);
  }
  onInCrease() {
    this.setState({count: this.state.count + 1});
  }
  onDeCrease() {
    this.setState({count: this.state.count - 1});
  }
  onRßeset() {
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
        <Myfunction onInCrease={this.onInCrease} />
      </View>
    );
  }
}