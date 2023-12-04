import { ButtonSpinner, Image, Pressable, Toast, ToastDescription, ToastTitle, useToast } from '@gluestack-ui/themed';
import { Box, Button, ButtonText, CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel, HStack, Input, InputField, InputIcon, InputSlot, Link, LinkText, ScrollView, StatusBar, Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';

import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { facebook, gmail } from '../assets';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../utils/rootParams';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useLoginMutation } from '../state/Services/auth.service';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../state/reducers/auth.reducer';

const schema = yup
    .object({
        username: yup.string().required('username is required'),
        password: yup.string().required('password is required'),
    })
    .required()


export const Login = () => {
    const [secured, setSecured] = useState(true)
    const { navigate } = useNavigation<MainScreenNavigationProp>()
    const [remember, setRemember] = useState<string>('checked')
    const [isChecked, setIsChecked] = useState(false)
    const toast = useToast()
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
    })
    const onSubmit = (data: any) => {
        console.log(data);
        login(data).unwrap().then((response) => {
            const { token, ...rest } = response;
            console.log(response);
            dispatch(setCredentials({ user: rest, token: token }))
        }).catch((error) => {
            toast.show({
                placement: "top",
                render: ({ id }) => {
                    return (
                        <Toast
                            nativeID={"toast-" + id}
                            action="error"
                            variant="solid"
                        >
                            <VStack space="xs">
                                <ToastTitle>Login Error</ToastTitle>
                                <ToastDescription color='$red500'>
                                    {error.message}
                                </ToastDescription>
                            </VStack>
                        </Toast>
                    )
                },
            })
        })


    }



    return (
        <ScrollView flex={1} >
            <StatusBar translucent={false} backgroundColor={'$transparent'} />
            <Box justifyContent='center' my={8} flexDirection='row' alignItems='center'>
                <Box bg={'#FC6B2B'} p={6} rounded={'$full'}>

                    <AntDesign color={'white'} name={'shoppingcart'} size={24} />
                </Box>
                <Text fontWeight='900' color={'#FC6B2B'} p={8} fontSize={RFValue(30)} lineHeight={32}>basket</Text>
            </Box>
            <Box alignItems='center' mt={8}>

                <Text fontWeight='900' fontFamily='Cardo-Bold' color='$black' fontSize={RFValue(28)} lineHeight={48} my={12}>Log into your account</Text>
                <Text textAlign='center' fontFamily='Cardo-Regular' w='$3/4' color='$black' fontSize={RFValue(20)} lineHeight={26}>Enter your email and password to access your account or create an account</Text>
            </Box>
            <VStack space='md' px={20} py={12} flex={2} my={24} alignItems='center' >
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <Input
                            variant="underlined"
                            w='$full'
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}
                            borderColor='#FC6B2B'
                            borderBottomWidth={1}
                        >
                            <InputSlot pr={12}>
                                <InputIcon><Feather name='mail' color='#FC6B2B' size={16} /></InputIcon>
                            </InputSlot>
                            <InputField
                                value={value}
                                onChangeText={onChange}
                                placeholder="Enter Email address"
                            />
                        </Input>
                    )}
                    name='username'
                />
                {errors.username && <Text alignSelf='flex-start' textAlign='left' color='$red600'>{errors.username.message}</Text>}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            variant="underlined"
                            size="md"
                            w='$full'
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}
                            borderColor='#FC6B2B'
                            borderBottomWidth={1}
                        >
                            <InputSlot pr={12}>
                                <InputIcon><Feather name='key' color='#FC6B2B' size={16} /></InputIcon>
                            </InputSlot>
                            <InputField
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry={secured}
                                placeholder="Enter Password"
                            />
                            <InputSlot onPress={() => setSecured(!secured)}>
                                <InputIcon><Feather name={secured ? 'eye' : 'eye-off'} color='black' size={16} /></InputIcon>
                            </InputSlot>

                        </Input>)}
                    name='password'
                />
                {errors.password && <Text alignSelf='flex-start' textAlign='left' color='$red600'>{errors.password.message}</Text>}

                <Checkbox value={remember} onChange={(value) => setIsChecked(value)} my={4} aria-label='remember' alignSelf='flex-start' size="md" isInvalid={false} isDisabled={false}>
                    <CheckboxIndicator mr="$2">
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Remember me</CheckboxLabel>
                </Checkbox>

                <Button onPress={handleSubmit(onSubmit)} rounded={'$lg'} sx={{ _icon: { fontSize: 36 } }} bg={'#0F2232'} w='$3/4' alignSelf='center' my={24}>
                    <ButtonText fontSize={RFValue(18)} fontWeight='700' lineHeight={24} textTransform='uppercase'>
                        Login
                    </ButtonText>
                    {
                        isLoading && <ButtonSpinner ml={4} />
                    }


                </Button>

                <Link sx={{ _text: { color: '#FC6B2B', fontSize: 24, lineHeight: 24 } }} >
                    <LinkText>Forgot Password</LinkText>
                </Link>
                <Box flexDirection='row' my={8} justifyContent='center' alignItems='center'>
                    <Box w={8} mr={4} h={1} bg='$black' />
                    <Text>Or continue with</Text>
                    <Box ml={4} w={8} h={1} bg='$black' />
                </Box>

                <HStack gap='$4' flexDirection='row'>
                    <Button justifyContent='center' alignItems='center' variant='outline' borderColor='$black' rounded={'$lg'} sx={{ _icon: { fontSize: 36 } }} flex={1} alignSelf='center' my={24}>
                        <Image source={facebook} position='absolute' alt={'facebook'} left={15} w={20} h={20} />
                        <ButtonText color='$black' fontSize={RFValue(18)} fontWeight='700' lineHeight={24} textTransform='capitalize'>
                            Facebook
                        </ButtonText>

                    </Button>
                    <Button borderColor='$black' variant='outline' rounded={'$lg'} sx={{ _icon: { fontSize: 36 } }} flex={1} alignSelf='center' my={24}>
                        <Image source={gmail} position='absolute' alt={'facebook'} left={15} w={20} h={20} />
                        <ButtonText color='$black' borderColor='$black' fontSize={RFValue(18)} fontWeight='700' lineHeight={24} textTransform='capitalize'>
                            Google
                        </ButtonText>

                    </Button>
                </HStack>

                <HStack gap='$16' flexDirection='row' my={8} justifyContent='center' alignItems='center'>

                    <Text color='$gray' fontSize={20} lineHeight={24} >Don't have an account?</Text>
                    <Pressable sx={{ _text: { color: '#FC6B2B', fontSize: 12 } }} >
                        <Text color='#FC6B2B' fontSize={20} >Sign up</Text>
                    </Pressable>

                </HStack>
            </VStack>


        </ScrollView>
    )
}
