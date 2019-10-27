/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {Dimensionapp} from '../unit/Dimensionapp';

export default class Word extends Component {
  render() {
    const {en, vn, isMemorized} = this.props.word;
    return (
      <View
        style={{
          flexDirection: 'column',
          height: Dimensionapp.getWidth() / 4,
          borderColor: 'white',
          borderRadius: Dimensionapp.getWidth() / 100,
          backgroundColor: 'white',
          margin: Dimensionapp.getWidth() / 70,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: Dimensionapp.getWidth() / 8,
          }}>
          <Text
            style={{fontSize: Dimensionapp.getWidth() / 15, color: '#28a745'}}>
            {en}
          </Text>
          <Text style={{fontSize: Dimensionapp.getWidth() / 15, color: 'red'}}>
            {isMemorized ? '----' : vn}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: Dimensionapp.getWidth() / 30,
            paddingHorizontal: Dimensionapp.getWidth() / 15,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: isMemorized ? '#28a745' : 'red',
              padding: Dimensionapp.getWidth() / 65,
              marginLeft: isMemorized ? Dimensionapp.getWidth() / 20 : 0,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: Dimensionapp.getWidth() / 20,
              }}>
              {isMemorized ? 'Forgot' : 'isMemorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0A800',
              padding: Dimensionapp.getWidth() / 65,
            }}>
            <Text
              style={{color: 'white', fontSize: Dimensionapp.getWidth() / 20}}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
