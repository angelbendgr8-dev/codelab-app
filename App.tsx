/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Box, Text, Image } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigation/StackNav';
import { Provider } from 'react-redux';
import { store } from './src/state/store';

const FeatureCard = ({ iconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Image source={iconSvg} alt="document" width={22} height={22} />
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView >

      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Provider store={store}>
            <Box
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}
              height="100%"
            >
              <StackNav />
            </Box>

          </Provider>
        </NavigationContainer>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
