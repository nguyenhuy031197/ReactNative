/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {Dimensionapp} from '../unit/Dimensionapp';

console.disableYellowBox = true;

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMode: 'Show_All',
      filters: [
        {value: 'Show_All'},
        {value: 'Show_Forgot'},
        {value: 'Show_Memorized'},
      ],
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Dropdown
          data={this.state.filters}
          containerStyle={{
            width: Dimensionapp.getWidth() * 0.9,
            height: Dimensionapp.getWidth() * 0.1,
            borderRadius: 5,
            borderWidth: 1,
            paddingLeft: Dimensionapp.getWidth() * 0.02,
          }}
          inputContainerStyle={{borderBottomColor: 'transparent'}}
          dropdownOffset={{top: Dimensionapp.getWidth() * 0.01, left: 0}}
          onChangeText={text => {
            this.setState({filterMode: text});
          }}
          value={this.props.filterMode}
        />
      </View>
    );
  }
}