/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import Testing from './test.jsx';
import {LogBox} from 'react-native';
import axios from 'axios';

AppRegistry.registerComponent(appName, () => App);
LogBox.ignoreLogs(['Remote debugger']);

