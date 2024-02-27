

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
import { SearchPage } from 'src/pages/search/ui';


const Stack = createNativeStackNavigator();




export const App = () => {
  
  
  return (
      <>
        
        <Stack.Navigator 
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: {backgroundColor: 'white'}
          }}
        >

          <Stack.Screen 
            name='HomePage' 
            component={HomePage}
            options={({navigation}) => ({
                title: "",
                headerLeft: () => <Avatar/>,
                headerRight: () => <MenuButton navigation={navigation}/>,
            })}
              // {
              //   title: "",
              //   headerLeft: () => <Avatar/>,
              //   headerRight: () => <MenuButton />,
              // }}
            />

          <Stack.Screen 
            name='WorkSpaces'
            component={WorkSpacesPage}
            options={{
              title: "WorkSpaces",
              headerTitleAlign: 'center'
            }}
            />
          <Stack.Screen 
            name='SearchPage'
            component={SearchPage}
            options={{
              title: "Search",
              headerTitleAlign: 'center'
            }}
            />
        </Stack.Navigator>
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

