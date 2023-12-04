import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBar} from './BottomTabBar';
import { Dashboard } from '../Pages/Dashboard';
import { Saved } from '../Pages/Saved';
import { Account } from '../Pages/Account';
import { Cart } from '../Pages/Cart';
import { BottomTabParamList } from '../utils/rootParams';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
