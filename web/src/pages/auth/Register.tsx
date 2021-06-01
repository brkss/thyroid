import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { ErrorMessage } from '../../components/ErrorMessage';

export const RegisterPage : React.FC = () => {


  const [form, SetForm] = React.useState<any>();
  const [error, SetError] = React.useState('');

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => { 
      SetForm({
          ...form,
          [e.currentTarget.id] : e.currentTarget.value
      });
  }

  const handleCreateAccount = () => {

      SetError('')

      // validate
      if(!form || !form.name || !form.email || !form.phone || !form.password ){
          SetError('Invalid data');
          return ;
      }

  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} w='lg' py={12} px={6}>
        <Stack align={'center'}>
          <Heading   fontSize={'3xl'}>Sign up for a new account </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {
              error ? 
              <ErrorMessage message='invalid Data !' /> : null 
            }
            <FormControl id="email">
              <FormLabel>Name :</FormLabel>
              <Input type="text" placeholder='Example example' id="name" onChange={(e) => handleForm(e)} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Phone :</FormLabel>
              <Input type="text" placeholder='0000000000' id="phone" onChange={(e) => handleForm(e)} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='example@exapmle.com' id="email" onChange={(e) => handleForm(e)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" id="password" onChange={(e) => handleForm(e)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Link color={'gray.600'}>Login to your account?</Link>
              </Stack>
              <Button
                bg={'gray.600'}
                color={'white'}
                _hover={{
                  bg: 'gray.900',
                }}
                onClick={() => handleCreateAccount()}
                >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}