import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { Welcome } from '../Pages/Welcome';
import { Onboarding } from '../Pages/Onboarding';
import { Login } from '../Pages/Login';
import SplashScreen from 'react-native-splash-screen';
import { BottomTab } from './BottomTab';
import { MainStackParamList } from '../utils/rootParams';
import AuthStack from './AuthNav';
import { useAuth } from '../state/hooks/user.hook';


const Stack = createNativeStackNavigator<MainStackParamList>();
export const StackNav = () => {
    const {token} = useAuth();

    React.useEffect(() => {
      setTimeout(() => SplashScreen.hide(), 3000);
    }, []);
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={'AuthStack'}>
    {!token ? (
      <>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        
      </>
    ) : (
      <>
        <Stack.Group>
          <Stack.Screen name="BottomTabs" component={BottomTab} />
         
        </Stack.Group>
        
      </>
    )}
  </Stack.Navigator>
  )
}
