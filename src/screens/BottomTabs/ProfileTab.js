import React from 'react'

import { View, Text } from 'react-native'
import { Stack,NativeBaseProvider } from 'native-base'

export default function ProfileTab() {
  return (
  
<NativeBaseProvider>
     <Stack space={4} w="100%" style={{padding: 10}}>
       <Text>ProfileTab</Text>
    </Stack>
</NativeBaseProvider>
   
  )
}
