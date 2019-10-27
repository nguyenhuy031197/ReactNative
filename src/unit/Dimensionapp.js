import {Dimensions} from 'react-native';
export class Dimensionapp {
  static getWidth() {
    return Dimensions.get('window').width;
  }
  static getHeight() {
    return Dimensions.get('window').height;
  }
}

// const Dimensionapp1 = {
//   width: Dimensions.get('window').width,
//   height: Dimensions.get('window').height,
// };
