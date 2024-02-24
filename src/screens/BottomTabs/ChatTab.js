import React from "react";
import { Stack,NativeBaseProvider,Text } from "native-base";



export const ChatTab = () => {
  return (
    <NativeBaseProvider>
      <Stack space={4} w="100%" style={{padding: 10}}>
        <Text>ChatTab</Text>
      </Stack>
    </NativeBaseProvider>
    
  )
}
