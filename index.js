/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store/index.ts'

const Wrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Wrapper);
LogBox.ignoreLogs(['Remote debugger']);

