/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
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
      if (id !== item.id) return item;
      return {...item, isMemorized: !item.isMemorized};
    });
    this.setState({words: newArray});
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
        {this.state.words.map(item => {
          const {en, vn, isMemorized, id} = item;
          return (
            <View style={styles.container} key={item.id}>
              <View style={styles.groupText}>
                <Text style={styles.textEn}>{en}</Text>
                <Text style={styles.textVn}>{isMemorized ? '----' : vn}</Text>
              </View>
              <View style={styles.groupButton}>
                <TouchableOpacity
                  onPress={function() {
                    this.toggleMemorized(id);
                  }.bind(this)}
                  style={{
                    ...styles.touchableMemorized,
                    backgroundColor: isMemorized ? '#28a745' : 'red',
                    marginLeft: isMemorized ? Dimensionapp.getWidth() / 20 : 0,
                  }}>
                  <Text style={styles.textMemorized}>
                    {isMemorized ? 'Forgot' : 'isMemorized'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableRemove}>
                  <Text style={styles.textRemove}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
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
