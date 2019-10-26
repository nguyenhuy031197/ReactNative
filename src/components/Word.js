/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default class Word extends Component {
  render() {
    const {en, vn, isMemorized} = this.props.word;
    return (
      <View
        style={{
          flexDirection: 'column',
          height: width / 5,
          borderColor: 'white',
          borderRadius: width / 100,
          backgroundColor: 'white',
          margin: width / 70,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{fontSize: width / 15, color: '#28a745'}}> {en} </Text>
          <Text style={{fontSize: width / 15, color: 'red'}}>
            {isMemorized ? vn : '----'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: width / 30,
          }}>
          <TouchableOpacity>
            <Text>Forgot</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
