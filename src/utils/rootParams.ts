import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    OnBoarding: undefined;
    Dashboard: undefined;
    Welcome: undefined;
    Security: undefined;
    Login: undefined;
};

export type BottomTabParamList = {
    Dashboard: undefined;
    Saved: undefined;
    Account: undefined;
    Cart: undefined;
};


export type MainStackParamList = {
    AuthStack: NavigatorScreenParams<RootStackParamList>;
    BottomTabs: NavigatorScreenParams<BottomTabParamList>;
  };


export type MainScreenNavigationProp = NativeStackNavigationProp<MainStackParamList>;
export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>
export type BottomNavigationProp = BottomTabNavigationProp<BottomTabParamList>