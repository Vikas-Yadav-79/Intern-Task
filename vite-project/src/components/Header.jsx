import React from 'react';
import { Flex, Image } from '@chakra-ui/react';



const Header = () => {
  return (
    <>

      <Flex justifyContent={'space-between'} alignItems='center' pt={3}>
        <Flex justifyContent={'flex-start'} alignItems='center' color={'white'}>
          <Image src='/Time.png' pr={1.5} />
          <Image src='/icon_ geo, filled.png' />
        </Flex>
        <Flex justifyContent={'flex-end'} alignItems={'center'} color={'white'} p={1}>
          <Image pr={1.5} src='/indicator_ signal.png' />
          <Image pr={1.5} src='/indicator_ wifi.png' />
          <Image src='/indicator_ battery.png' />
        </Flex>

      </Flex>

    </>


  );
}

export default Header;
