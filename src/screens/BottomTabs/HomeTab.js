import React from 'react'
import { Stack,NativeBaseProvider,Box ,HStack,Avatar,Image} from 'native-base'
import { Text,View,Dimensions} from 'react-native'

import SvgImage from "../../assets/img/svgGradient1.png"
import Carousel from 'react-native-reanimated-carousel'


function HomeTab() {
  const width = Dimensions.get('window').width;
  return (
    
    <NativeBaseProvider>
      <Stack space={4} w="100%" h="100%" marginTop={10}>
        

          <Box w="100%" h="15%" bg="white" borderRadius={"10"} >
             <HStack justifyContent="center" space={2} h="30%" >
                    <Avatar bg="green.500" source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                    </Avatar>
                    <Box>   
                      <Text color="white" fontSize="md" bold>
                      Good Morning,
                      </Text>
                      <Text color="white" fontSize="xl"  >
                        Janet
                      </Text>
                    
                    </Box>
                
                
             </HStack>
         
        </Box>   
        <Box w="100%" h="15%" bg="white" borderRadius={"10"} >
        <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={2000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            Live Session
                        </Text>
                        
                    </View>
                )}
            />


        </Box>
        
    </Stack>
    </NativeBaseProvider>


        
   
  )
}

export default HomeTab