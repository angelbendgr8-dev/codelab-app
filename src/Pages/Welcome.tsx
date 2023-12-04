import { ArrowRightIcon, Box, Button, ButtonIcon, ButtonText, Image, StatusBar, Text } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RootNavigationProp } from '../utils/rootParams';
import { welcome } from '../assets';

export const Welcome = () => {
    const {navigate} = useNavigation<RootNavigationProp>()
    return (
        <Box flex={1} bg={'#0F2232'}>
            <StatusBar translucent={false} backgroundColor={'$transparent'} />
            <Box justifyContent='center' my={8} flexDirection='row' alignItems='center'>
                <Box bg={'#FC6B2B'} p={6} rounded={'$full'}>

                <AntDesign color={'white'} name={'shoppingcart'} size={24} />
                </Box>
                <Text fontWeight='900' color={'#FC6B2B'} p={8} fontSize={RFValue(30)} lineHeight={32}>basket</Text>
            </Box>
            <Box alignItems='center' mt={8}>
                <Text color='#A0B5C3' fontFamily='Cardo-Regular' fontSize={RFValue(24)} lineHeight={26}>Welcome to</Text>
                <Text fontWeight='900' fontFamily='Cardo-Bold' color='$white' fontSize={RFValue(40)} lineHeight={48} my={12}>basket online store</Text>
                <Text textAlign='center' fontFamily='Cardo-Regular' w='$3/4' color='#A0B5C3' fontSize={RFValue(20)} lineHeight={26}>basket is not online store for both new and used products.</Text>
            </Box>
            <Box flex={2} my={24} >
                <Image alt='welcome' source={welcome} h={'$full'} w={'$full'}/>
            </Box>

            <Button onPress={()=> navigate('Login')} rounded={'$lg'} sx={{ _icon: { fontSize: 36 } }} bg='#FC6B2B' w='$3/4' alignSelf='center' my={24}>
                <ButtonText fontSize={RFValue(18)} fontWeight='700' lineHeight={24} textTransform='uppercase'>
                    Get Started
                </ButtonText>
                <ButtonIcon position='absolute' right={10} color='$black' fontSize={12} as={ArrowRightIcon} size={'xl'} />

            </Button>
        </Box>
    )
}
