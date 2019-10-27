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
          height: width / 4,
          borderColor: 'white',
          borderRadius: width / 100,
          backgroundColor: 'white',
          margin: width / 70,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: width / 8,
          }}>
          <Text style={{fontSize: width / 15, color: '#28a745'}}> {en} </Text>
          <Text style={{fontSize: width / 15, color: 'red'}}>
            {isMemorized ? '----' : vn}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: width / 30,
            paddingHorizontal: width / 15,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: isMemorized ? '#28a745' : 'red',
              padding: width / 65,
              marginLeft: isMemorized ? width / 20 : 0,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: width / 20,
              }}>
              {isMemorized ? 'Forgot' : 'isMemorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0A800',
              padding: width / 65,
            }}>
            <Text style={{color: 'white', fontSize: width / 20}}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
