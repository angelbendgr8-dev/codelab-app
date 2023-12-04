
import { Box, Text } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
// import {News, Scores, Settings, Sports, Videos} from '../assets/global';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};
export const BottomTabBar: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      backgroundColor="#F6F6F6"
      justifyContent="space-evenly"
      py="$5">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {label === 'Dashboard' ? (
              <AntDesign name='home' size={24} color={isFocused ? '#FD6B2B' : 'black'} />
            ) : label === 'Saved' ? (
              <Box >
                <Ionicons name='star-outline' size={24} color={isFocused ? '#FD6B2B' : 'black'} />
              </Box>
            ) : label === 'Account' ? (
              <Box  >
                <FontAwesome name='user-o' size={24} color={isFocused ? '#FD6B2B' : 'black'} />
              </Box>
            ) : (
              <Box >
                <AntDesign name='shoppingcart' size={24} color={isFocused ? '#FD6B2B' : 'black'} />
              </Box>
            )}
            <Text color={isFocused ? '#FD6B2B' : 'black'}>{label}</Text>
          </TouchableOpacity>
        );
      })}

    </Box>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 40,
  },
});
