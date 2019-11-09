/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from 'react-native';
import {Dimensionapp} from '../unit/Dimensionapp';
import {Dropdown} from 'react-native-material-dropdown';

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
      filterMode: 'Show_All',
      filters: [
        {value: 'Show_All'},
        {value: 'Show_Forgot'},
        {value: 'Show_Memorized'},
      ],
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
  renderItemWord(item) {
    const {en, vn, isMemorized, id} = item;
    return (
      <View style={styles.container} key={item.id}>
        <View style={styles.groupText}>
          <Text style={styles.textEn}>{en}</Text>
          <Text style={styles.textVn}>{isMemorized ? '----' : vn}</Text>
        </View>
        <View style={styles.groupButton}>
          <TouchableOpacity
            onPress={() => this.toggleMemorized(id)}
            style={{
              ...styles.touchableMemorized,
              backgroundColor: isMemorized ? '#28a745' : 'red',
              marginLeft: isMemorized ? Dimensionapp.getWidth() / 20 : 0,
            }}>
            <Text style={styles.textMemorized}>
              {isMemorized ? 'Forgot' : 'isMemorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.removeWord(id)}
            style={styles.touchableRemove}>
            <Text style={styles.textRemove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
              value={this.state.filterMode}
            />
          </View>
          {this.state.words.map(item => this.renderItemWord(item))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: Dimensionapp.getWidth() / 4,
    borderColor: 'white',
    borderRadius: Dimensionapp.getWidth() / 100,
    backgroundColor: 'white',
    margin: Dimensionapp.getWidth() / 70,
    justifyContent: 'center',
    position: 'relative',
  },
  groupText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Dimensionapp.getWidth() / 8,
  },
  textVn: {
    fontSize: Dimensionapp.getWidth() / 15,
    color: 'red',
  },
  textEn: {
    fontSize: Dimensionapp.getWidth() / 15,
    color: '#28a745',
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Dimensionapp.getWidth() / 30,
    paddingHorizontal: Dimensionapp.getWidth() / 15,
  },
  touchableMemorized: {
    padding: Dimensionapp.getWidth() / 65,
  },
  textMemorized: {
    color: 'white',
    fontSize: Dimensionapp.getWidth() / 20,
  },
  touchableRemove: {
    backgroundColor: '#E0A800',
    padding: Dimensionapp.getWidth() / 65,
  },
  textRemove: {
    color: 'white',
    fontSize: Dimensionapp.getWidth() / 20,
  },
});
