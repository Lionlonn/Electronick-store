

import * as React from 'react';
import { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { HomePage } from 'src/pages/home/ui/intex';
import { WorkSpacesPage } from 'src/pages/workspaces/ui';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Avatar, MenuButton } from 'src/features/header-bar'


const Stack = createNativeStackNavigator();




export const App = () => {
  
  
  return (
      <>
        
        <Stack.Navigator >

          <Stack.Screen 
            name='HomePage' 
            component={HomePage}
            options={{
                title: "",
                headerLeft: () => <Avatar/>,
                headerRight: () => <MenuButton/>,
                headerTransparent: true
              }}
            />

          <Stack.Screen 
            name='WorkSpaces'
            component={WorkSpacesPage}
            options={{
              title: "WorkSpaces",
              headerTitleAlign: 'center'
            }}
            />
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

