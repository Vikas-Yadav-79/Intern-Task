import React, { useState } from 'react';
import bellLogo from '/bell_image.svg';
import spiralLogo from '/spiral_image.svg';
import { Button, Flex, Image, Text, useToast } from '@chakra-ui/react';

export const Content = () => {
    const toast = useToast();
    const [notificationSent, setNotificationSent] = useState(false);

    // const handleSendNotification = () => {
    //     setNotificationSent(true);
    //     toast({
    //         title: 'Notification Status',
    //         description: "Notification Sent Successfully",
    //         status: 'success',
    //         duration: 2000,
    //         isClosable: true,
    //     });
    //     setTimeout(() => setNotificationSent(false), 4000); 

    // };
    const handleSendNotification = () => {
        Notification.requestPermission().then(permission => {
           
          if (permission === 'granted') {
            navigator.serviceWorker.ready.then(registration => {
              registration.showNotification('Notification Title', {
                body: 'New Message Recieved',
                icon: '/bell_image.svg', 
                actions: [{ action: 'open_url', title: 'Open Message' }]
              });
            }).catch(error => {
              console.error('Service Worker registration error:', error);
            });
          } else {
            console.warn('Notification permission denied');
          }
        });
    
        setNotificationSent(true);
        setTimeout(() => setNotificationSent(false), 4000);
      };

    return (
        <>
            <Flex textAlign={'center'} flexDirection={'column'} alignItems='center' pt={[4,6]} pb={[4,6]}>
                <Text pb={2}  textColor={'white'} fontSize={['x-large','xx-large']} fontWeight={'500'}>
                    Lorem Ipsum...
                </Text>
                <Text  textColor={'#717171'} fontWeight={'400'} fontSize={['md','lg']}>
                    Lorem ipsum dolor sit amet.
                </Text>
            </Flex>

            <Flex alignItems={'center'} justifyContent={'center'} position="relative" mt={[8,14]} >
                <Image src={spiralLogo} className={notificationSent ? 'spiral-effect' : ''} />
                <Image src={bellLogo} zIndex={1} position={'absolute'} left="50%" top="50%" transform="translate(-50%, -50%)" className={notificationSent ? 'bell-move' : ''}  cursor={'pointer'}/>
            </Flex>

            <Flex justifyContent={"Center"} mt={[8, 14]} pb={[8, 14]}>
                <Button 
                    cursor={'pointer'}
                    _hover={{'bg': '#AD4722' , boxShadow:'xl'}}
                    color={'#fff'}
                    bg={'linear-gradient(to right, #330910 20%, #AD4722 50%, #673215 )30% '}
                    w={["80%", "327px"]}
                    onClick={handleSendNotification}
                >
                    Send Notification
                </Button>
            </Flex>
        </>
    );
}
