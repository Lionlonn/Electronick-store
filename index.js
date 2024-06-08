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
import { PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';


const Wrapper = () => {

    
    return (
        <PaperProvider>
            <NavigationContainer>
                <Provider store={store}>
                        <App/>
                </Provider>
            </NavigationContainer>
        </PaperProvider>
        
        
    )
}
store.dispatch(productsAll())


AppRegistry.registerComponent("AwesomeProject", () => Wrapper);
LogBox.ignoreLogs(['Remote debugger']);

