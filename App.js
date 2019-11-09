/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Word from './src/components/Word';
import List from './src/components/List';
import Form from './src/components/Form';
import Filter from './src/components/Filter';

// import MyState from './src/components/MyState';
// import MyProps from './src/components/MyProps';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <List />
        {/* <Form /> */}
        {/* <Filter /> */}
      </SafeAreaView>
    );
  }
}

export default App;