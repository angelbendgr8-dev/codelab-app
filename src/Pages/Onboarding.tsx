import { Box, Icon, Image, StatusBar,Pressable, Text } from '@gluestack-ui/themed'
import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native'
import { onboarding } from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../utils/rootParams';

export const Onboarding = () => {
    const { height, width } = useWindowDimensions();
    const {navigate} = useNavigation<RootNavigationProp>()
    return (
        <Box flex={1} >
            <StatusBar translucent={false} backgroundColor={'$transparent'} />
            <Image
                w={'$full'}
                h={'$full'}
                alt={'Image background'}
                position='absolute'
                source={onboarding}
                bg='#0F2232' 
                opacity={0.6}
            />
                {/* <Box zIndex={20} position='absolute' w={'$full'} h={'$full'} /> */}
                <Box flex={1} zIndex={10} >
                    <Box flex={5} pt={24} justifyContent='center' alignItems='center' >
                        <Box  h={150} w={150}  justifyContent='center' bg={'#FC6B2B'} rounded={'$full'} alignItems='center'>
                            <AntDesign color={'white'} name={'shoppingcart'} size={24} />
                            <Text fontWeight='900' color='$white' mt={4} p={8} fontSize={RFValue(40)} lineHeight={32}>basket</Text>
                        </Box>
                        <Text color='$white' fontSize={RFValue(24)} fontWeight='500' my={12} lineHeight={28}>Start Shopping</Text>
                        <Text color='$white' fontSize={RFValue(24)} fontWeight='500' my={12} lineHeight={28}>Stay Happy</Text>
                        <Text color='$white' fontSize={RFValue(24)} fontWeight='500' my={12} lineHeight={28}>Anytime</Text>
                    </Box>
                    <Box px={4} flex={1}  justifyContent='center' alignItems='center'>
                        <Text color='#FD6B2B' mb={24} fontSize={24} fontWeight='700' p={6} >Basket Online Marketplace</Text>
                        <Box flex={1} w='$full'  flexDirection='row' justifyContent='space-between'>

                            <Pressable
                                onPress={() => navigate('Login')}  justifyContent='center' bg="$transparent" sx={{ ':hover': { bg: "$primary400" } }}>
                                <Text color="#FD6B2B" fontWeight='500' fontSize={24} p={4}>Skip</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => navigate('Welcome')} justifyContent='center'  bg="$transparent" sx={{ ':hover': { bg: "$primary400" } }}>
                                <Text color="#FD6B2B" fontWeight='500' fontSize={24}>Next</Text>
                            </Pressable>
                        </Box>
                    </Box>
                </Box>
           
        </Box>
    )
}

const style = StyleSheet.create({

})
