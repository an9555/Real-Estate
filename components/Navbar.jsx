import React from 'react'

import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu } from 'react-icons/fc';
import { ImHome3 } from "react-icons/im";
import {RiChatPollLine} from "react-icons/ri";
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
      <Box fontSize='3xl' color='purple.500' fontWeight='bold'>
        <Link href='/' paddingLeft='2'>Realtor</Link>
      </Box>
      <Spacer/>
      <Box>
        <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='' passHref>
            <MenuItem icon={<ImHome3 />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<RiChatPollLine />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>

      </Box>
    </Flex>
  )


export default Navbar