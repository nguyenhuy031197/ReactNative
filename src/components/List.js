/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from 'react-native';
import {Dimensionapp ,Orientation} from '../unit/Dimensionapp';
import Word from './Word';
import Filter from './Filter';
import Form from './Form';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 'a1', en: 'One', vn: 'Mot', isMemorized: true},
        {id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 'a3', en: 'Three', vn: 'Ba', isMemorized: false},
        {id: 'a4', en: 'Four', vn: 'Bon', isMemorized: false},
        {id: 'a5', en: 'Five', vn: 'Nam', isMemorized: true},
      ],
      shouldShowForm: false,
      filterMode: 'Show_All',
    };
  }
  toggleMemorized(id) {
    const newArray = this.state.words.map(item => {
      if (id !== item.id) {
        return item;
      }
      return {...item, isMemorized: !item.isMemorized};
    });
    this.setState({words: newArray});
  }
  removeWord(id) {
    const newArray = this.state.words.filter(item => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    this.setState({words: newArray});
  }
  jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
  }
  addWord() {
    const {txtEn, txtVn} = this.state;
    if (txtEn.length <= 0 || txtVn.length <= 0) {
      return alert('Ban chua nhap du thong tin');
    }
    const newWord = {
      id: Math.random(),
      en: txtEn,
      vn: txtVn,
      isMemorized: false,
    };
    const newArray = this.jsonCopy(this.state.words);
    newArray.unshift(newWord);
    this.setState({words: newArray, txtEn: '', txtVn: ''});
  }
  toggleForm() {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  }
  filteredWord = () => {
    return this.state.words.filter(item => {
      if (this.state.filterMode === 'Show_All') {
        return true;
      }
      if (this.state.filterMode === 'Show_Forgot' && item.isMemorized) {
        return true;
      }
      if (this.state.filterMode === 'Show_Memorized' && !item.isMemorized) {
        return true;
      }
      return false;
    });
  };
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{flex: 1, backgroundColor: 'lightgrey', position: 'relative'}}>
          <View
            style={{
              borderColor: 'white',
              borderRadius: Dimensionapp.getWidth() / 100,
              backgroundColor: 'white',
              margin: Dimensionapp.getWidth() / 70,
              padding: Dimensionapp.getWidth() / 90,
            }}>
            <Form shouldShowForm={this.state.shouldShowForm} />
          </View>
          <Filter filterMode={this.state.filterMode} />
          {this.filteredWord().map(item => (
            <Word word={item} />
          ))}
        </View>
      </ScrollView>
    );
  }
}