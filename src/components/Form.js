/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <TextInput
          style={{
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            margin: 10,
            fontSize: 20,
            paddingHorizontal: 20,
          }}
          placeholder="English"
        />
        <TextInput
          style={{
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            margin: 10,
            fontSize: 20,
            paddingHorizontal: 20,
          }}
          placeholder="Vietnamese"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#28a745', padding: 15, borderRadius: 8}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Add word
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'red', padding: 15, borderRadius: 8}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20}}>Word : </Text>
      </KeyboardAvoidingView>
    );
  }
}
