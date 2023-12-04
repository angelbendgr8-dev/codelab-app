import { Pressable, Text } from '@gluestack-ui/themed';
import { Box, HStack } from '@gluestack-ui/themed'
import React, { FC } from 'react'

type Props = {
    title: string;
    icon: any;
}
export const Notification: FC<Props> = ({ title, icon }) => {
    return (
        <Pressable flexDirection='row' gap={'$10'}  flex={1}  justifyContent='center'>
            <Box flex={2}   alignItems='flex-end' justifyContent='center' >
                {icon}
            </Box>
            <Box flex={4} alignItems='flex-start'  justifyContent='center' >

                <Text textAlign='left' fontWeight='800' fontSize={16}>{title}</Text>
            </Box>
        </Pressable>
    )
}
