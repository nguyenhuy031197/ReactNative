/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Word from './src/components/Word';
import MyState from './src/components/MyState';
// import MyProps from './src/components/MyProps';

const arrayWords = [
  {id: 'a1', en: 'One', vn: 'Mot', isMemorized: true},
  {id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 'a3', en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 'a4', en: 'Four', vn: 'Bon', isMemorized: false},
  {id: 'a5', en: 'Five', vn: 'Nam', isMemorized: true},
];
class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
          {arrayWords.map(function(word) {
            return <Word word={word} key={word.id} />;
          })}
        </View> */}
        <MyState />
      </SafeAreaView>
    );
  }
}

export default App;
