import React from 'react';
import { Onboarding } from '../Pages/Onboarding';
import { Welcome } from '../Pages/Welcome';
import { Login } from '../Pages/Login';
import { RootStackParamList } from '../utils/rootParams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'OnBoarding'}>
     <Stack.Screen name="OnBoarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
