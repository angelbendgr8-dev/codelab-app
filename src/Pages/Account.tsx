import { Image, Text } from '@gluestack-ui/themed'
import { Box } from '@gluestack-ui/themed'
import React from 'react'
import { Header } from '../components/Header'
import { avatar, onboarding } from '../assets'
import { Notification } from '../components/Notification'
import Menu from '../assets/svgs/notif.svg';
import Star from '../assets/svgs/star.svg';
import Edit from '../assets/svgs/edit.svg';
import History from '../assets/svgs/document.svg'
import Track from '../assets/svgs/track.svg'
import Payment from '../assets/svgs/payment.svg'
import Setting from '../assets/svgs/settings.svg'
import Logout from '../assets/svgs/logout.svg'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import { useWindowDimensions } from 'react-native'
import { useAuth } from '../state/hooks/user.hook'
const menuItems = [
  {
    title: 'Notification',
    icon: <Menu height={20} width={20} />
  },
  {
    title: 'Edit Profile',
    icon: <Star height={20} width={20} />
  },
  {
    title: 'WishList',
    icon: <Star height={20} width={20} />
  },
  {
    title: 'Order History',
    icon: <History height={20} width={20} />
  },
  {
    title: 'Track Order',
    icon: <Track height={20} width={20} />
  },
  {
    title: 'Payment option',
    icon: <Payment height={20} width={20} />
  },
  {
    title: 'Settings',
    icon: <Setting height={20} width={20} />
  },
  {
    title: 'Logout',
    icon: <Logout height={20} width={20} />
  },
]
export const Account = () => {
  const {height,width} = useWindowDimensions()
  const {user} = useAuth()
  return (
    <Box flex={1} bg='$white'>
        <Header/>

        <Box zIndex={10} px={12} h={'32%'} bg={'#FC6B2B'}    pt={36}>
          <Box flexDirection='row' alignItems='center'>

            <Box mr={16} >
                <Image borderColor='$white' bg='$gray' borderWidth={2} h={70} w={70} rounded={'$full'} source={{ uri: user.image }} alt='avatar'/>
            </Box>
            <Box>
                <Text fontWeight='700' fontSize={30} lineHeight={32}>{user.firstName} {user.lastName}</Text>
                <Text>{user.email}</Text>
            </Box>
          </Box>
        </Box>
        <Box zIndex={20} px={10}  flex={1} borderTopRightRadius={20} borderTopLeftRadius={20} bg={'$white'} top={-22}>

          <Box zIndex={20} pt={54}  flex={1} borderTopRightRadius={15} borderTopLeftRadius={15} bg={'$white'} sx={{ 
            "@base":{
              top: -height* (10/100),
             
            },
            "@md":{
              top: -height/10
            }
           }} >
              {
                menuItems.map((item,index) => (
                  <Notification key={index} title={item.title} icon={item.icon} />
                ))
              }

          </Box>
        </Box>
    </Box>
  )
}
