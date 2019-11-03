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
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
          <View
            style={{
              flex: 1,
              position: 'relative',
            }}>
            <KeyboardAvoidingView
              behavior="padding"
              style={{
                borderColor: 'white',
                borderRadius: Dimensionapp.getWidth() / 100,
                backgroundColor: 'white',
                margin: Dimensionapp.getWidth() / 70,
                padding: Dimensionapp.getWidth() / 90,
              }}>
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
                value={this.state.en}
                onChangeText={function(text) {
                  this.setState({en: text});
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
                value={this.state.vn}
                onChangeText={function(text) {
                  this.setState({vn: text});
                }.bind(this)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    const {countId, en, vn} = this.state;
                    const newWord = {
                      id: countId,
                      en,
                      vn,
                    };
                    this.state.words.push(newWord);

                    this.setState({
                      words: this.state.words,
                      countId: this.state.countId + 1,
                    });
                  }}
                  style={{
                    backgroundColor: '#28a745',
                    padding: 15,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    Add word
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    padding: 15,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
            {this.state.words.map(item => this.renderItemWord(item))}
          </View>
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
