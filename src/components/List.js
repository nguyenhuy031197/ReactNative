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
import {Dimensionapp} from '../unit/Dimensionapp';
import Word from './Word';
import Filter from './Filter';

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
      txtEn: '',
      txtVn: '',
      shouldShowForm: false,
      filterMode: 'Show_Memorized',
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
  renderForm() {
    const {shouldShowForm} = this.state;
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
              onPress={() => this.addWord()}
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
              onPress={() => this.toggleForm()}
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
            {this.renderForm()}
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