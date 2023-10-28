/**
 * @format
 */

import { AppRegistry } from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store/index.ts'
import { productsAll } from './src/entities/product/model';


const Wrapper = () => {

    
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
store.dispatch(productsAll())



AppRegistry.registerComponent(appName, () => Wrapper);
LogBox.ignoreLogs(['Remote debugger']);

