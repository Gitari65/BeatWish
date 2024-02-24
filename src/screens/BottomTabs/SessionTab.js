import React from 'react'
import { Text } from 'react-native'
import { Stack,NativeBaseProvider } from 'native-base'

const SessionTab = () => {
  return (
  
<NativeBaseProvider>
       <Stack space={4} w="100%" style={{padding: 10}}>
     <Text>SessionTab</Text>
    </Stack>
</NativeBaseProvider>

  )
}

export default SessionTab;
