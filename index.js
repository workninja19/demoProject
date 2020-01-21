/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import firebase from 'firebase';
import firebaseSDK from './src/Config/firebaseSDK';
AppRegistry.registerComponent(appName, () => App);
