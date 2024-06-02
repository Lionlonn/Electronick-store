

import * as React from 'react';
import { useState, useEffect } from 'react'
import {
  Alert,
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
import { ProducstWorkSpace  } from 'src/pages/product-workspace/index'
import { ViewItemPage } from 'src/pages/view-item';
import { BasketPage } from 'src/pages/basket/ui';
import { WelcomePage } from 'src/pages/welcome/ui';
import { LoginPage } from 'src/pages/auth/ui';
import { RegistrationPage } from 'src/pages/registration/ui';
import { User, onAuthStateChanged } from 'firebase/auth';
// import { FIREBASE_AUTH } from './FirebaseConfig';
import './FirebaseConfig'
 


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen 
            name='HomePage' 
            component={HomePage}
            options={({navigation}) => ({
                title: "",
                headerLeft: () => <Avatar/>,
                headerRight: () => <MenuButton navigation={navigation}/>,
            })}
          />
    </InsideStack.Navigator>
  )
}

export const App = () => {
  const [ user, setUser ] = useState<User | null>(null);
  
  
 
  // useEffect(() => {
  //   onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //     console.log('user', user);
  //     if (user !== null) {
  //       Alert.alert('Авторизован')
  //     }
  //     setUser(user);
  //   });
  // }, [])

  return (
      <>
        
        <Stack.Navigator 
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: {backgroundColor: 'white'},
          }}
        >
          <Stack.Screen
            name="WelcomePage"
            component={WelcomePage}
            options={{headerShown: false}}   
          />
          
          <Stack.Screen 
            name='HomePage' 
            component={HomePage}
            options={({navigation}) => ({
                title: "",
                headerLeft: () => <Avatar navigation={navigation}/>,
                headerRight: () => <MenuButton navigation={navigation}/>,
            })}
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
          <Stack.Screen 
            name='ShopingCartPage'
            component={SearchPage}
            options={{
              title: "Shoping cart",
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name='ProductsWorkspace'
            component={ProducstWorkSpace}
          />
          <Stack.Screen
            name='ViewItem'
            component={ViewItemPage}
          />
          <Stack.Screen
            name='BasketPage'
            component={BasketPage}
            options={{
              title: "Basket cart",
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name='LoginPage'
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='RegistrationPage'
            component={RegistrationPage}
            options={{headerShown: false}}
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

