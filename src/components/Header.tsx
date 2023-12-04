import { Box, HStack, Image, Input, InputField, InputIcon, InputSlot, StatusBar } from '@gluestack-ui/themed'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';
import Menu from '../assets/svgs/home.svg'
export const Header = () => {
    return (
        <HStack py={4} bg={'#0F2232'} gap='$4' px={8} flexDirection='row' justifyContent='center' alignItems='center'>
            <Box justifyContent='center' my={8} flexDirection='row' alignItems='center'>
                <Box bg={'#FC6B2B'} p={6} rounded={'$full'}>
                    <AntDesign color={'white'} name={'shoppingcart'} size={24} />
                </Box>
            </Box>
            <Input
                variant="outline"
                flex={1}
                size="md"
                rounded={'$xl'}
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                px={4}
                bg='$white'
                borderColor='#0F2232'
                borderBottomWidth={1}
            >
                <InputSlot px={'$4'}>
                    <InputIcon><Feather name='search' color={'#0F2232'} size={16} /></InputIcon>
                </InputSlot>
                <InputField  placeholder="Search in basket" />
            </Input>
            <Menu height={20} width={20}/>
        </HStack>
    )
}
