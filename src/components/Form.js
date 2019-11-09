/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dimensionapp} from '../unit/Dimensionapp';
import {thisExpression} from '@babel/types';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEn: '',
      txtVn: '',
    };
  }
  renderForm() {
    const {shouldShowForm} = this.props;
    if (shouldShowForm) {
      return (
        <KeyboardAvoidingView behavior="padding">
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
            value={this.state.txtEn}
            onChangeText={function(text) {
              this.setState({txtEn: text});
            }.bind(this)}
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
            value={this.state.txtVn}
            onChangeText={function(text) {
              this.setState({txtVn: text});
            }.bind(this)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#28a745',
                padding: 15,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Add word
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 15,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => this.toggleForm()}
          style={{
            paddingVertical: Dimensionapp.getWidth() / 30,
            backgroundColor: '#28a745',
            alignItems: 'center',
            borderRadius: Dimensionapp.getWidth() / 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: Dimensionapp.getWidth() / 15,
            }}>
            +
          </Text>
        </TouchableOpacity>
      );
    }
  }
  render() {
    return <View>{this.renderForm()}</View>;
  }
}