import React from 'react';
import { Alert, AlertIcon, IconButton, Text, HStack, VStack, CloseIcon } from 'native-base';

const AlertDialog = ({ status, text }) => {
  return (
    <VStack space={3} w="100%" maxW="400">
      <Alert w="100%" status={status}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <AlertIcon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {text}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              _focus={{ borderWidth: 0 }}
              icon={<CloseIcon size="3" />}
              _icon={{ color: "coolGray.600" }}
            />
          </HStack>
        </VStack>
      </Alert>
    </VStack>
  );
};

export default AlertDialog;
