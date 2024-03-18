import { Spinner,Heading,HStack } from "native-base";
import React from 'react';

export default function SpinnerComponent() {
    return (
       <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    );
    }