/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { YellowBox } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigator';

YellowBox.ignoreWarnings(['Remote debugger', 'componentWillMount', 'Possible Unhandled Promise Rejection']);

console.disableYellowBox = true;

export default class App extends React.Component {

  render() {
    return <AppNavigator />;
  }
}
