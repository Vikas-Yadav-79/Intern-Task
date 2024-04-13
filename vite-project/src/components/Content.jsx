import React, { useState } from 'react';
import bellLogo from '/bell_image.svg';
import spiralLogo from '/spiral_image.svg';
import { Button, Flex, Image, Text, useToast } from '@chakra-ui/react';

export const Content = () => {
    const toast = useToast();
    const [notificationSent, setNotificationSent] = useState(false);

    const handleSendNotification = () => {
        setNotificationSent(true);
        toast({
            title: 'Notification Status',
            description: "Notification Sent Successfully",
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
        setTimeout(() => setNotificationSent(false), 4000); 

    };

    return (
        <>
            <Flex flexDirection={'column'} alignItems='center' pt={6} pb={6}>
                <Text pb={2} textAlign={'center'} textColor={'white'} fontSize={'xx-large'} fontWeight={'500'}>
                    Lorem Ipsum...
                </Text>
                <Text textAlign={'center'} textColor={'#717171'} fontWeight={'400'} fontSize={'large'}>
                    Lorem ipsum dolor sit amet.
                </Text>
            </Flex>

            <Flex alignItems={'center'} position="relative" mt={14}>
                <Image src={spiralLogo} className={notificationSent ? 'spiral-effect' : ''} />
                <Image src={bellLogo} zIndex={1} position={'absolute'} left="50%" top="50%" transform="translate(-50%, -50%)" className={notificationSent ? 'bell-move' : ''} />
            </Flex>

            <Flex justifyContent={"Center"} mt={14} pb={14}>
                <Button 
                    _hover={{'bg': '#AD4722'}}
                    color={'#fff'}
                    bg={'linear-gradient(to right, #330910 20%, #AD4722 50%, #673215 )30% '}
                    w={"327px"}
                    onClick={handleSendNotification}
                >
                    Send Notification
                </Button>
            </Flex>
        </>
    );
}
