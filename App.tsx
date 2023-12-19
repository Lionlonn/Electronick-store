

import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { HomePage } from 'src/pages/home/ui/intex';
import { WorkSpacesPage } from 'src/pages/workspaces/ui';
import  { ProductsList }  from 'widgets/products-list';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
      <>
        <Stack.Navigator>
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name='WorkSpaces' component={WorkSpacesPage}/>
        </Stack.Navigator>
        {/* <HomePage/> */}
        {/* <WorkSpacesPage/> */}
      </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

