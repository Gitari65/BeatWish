import React from 'react'
import { Stack,NativeBaseProvider,Box ,HStack,Avatar,Image} from 'native-base'
import { Text,View,Dimensions,StyleSheet,ImageBackground} from 'react-native'
import { useFonts,Merienda_300Light,Merienda_400Regular } from "@expo-google-fonts/merienda";
import SvgImage from "../../assets/img/svgGradient.png"
import { LinearGradient } from 'expo-linear-gradient';
import imageSource from "../../assets/img/djdeck.png"
import imageLive from "../../assets/img/computer.png"

import Carousel from 'react-native-snap-carousel';


export class HomeTab extends React.Component  {
  const width = Dimensions.get('window').width;
 
    let [fontsLoaded] = useFonts({
      Merienda:
        Merienda_400Regular
      });
  const styles = StyleSheet.create(  {
    text: {
      fontFamily: "Merienda",
      color: "white",
      alignContent: "center",
      fontSize:28

    },
    text2: {
        fontFamily: "Merienda",
        color: "white",
        alignContent: "center",
    
        },
        imageAvatar:{
         
          overflow: "hidden",
          borderWidth: 3,
          borderColor: "white",
          marginLeft: 10,
        },
        gradient: {
          
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        },image2:{
          width: 70,
          height: 70,
          
        },slide: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 5
      },
      title: {
          fontSize: 20,
          fontWeight: 'bold'
      }
  }
);

  
  return (
    
    <NativeBaseProvider>
      <Stack space={4} w="100%" h="100%" marginTop={10}>
        

          <Box w="100%" h="15%" bg="white" borderRadius={"10"} backgroundColor="amber.100">
             <ImageBackground source={imageSource} style={{flex: 1, resizeMode: "cover"}}>
                  <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                    <HStack space={2} h="30%" >
                            <Avatar bg="green.500" style={styles.imageAvatar} source={{
                              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>
                            </Avatar>
                            <Box w={"50%"} height="100%">   
                              <Text color="white" style={styles.text2} fontSize="md" bold>
                              Good Morning,
                              </Text>
                              <Text color="white"  style={styles.text}  >
                                Janet
                              </Text>
                            
                            </Box>
                        
                        
                    </HStack>
                
                </Box>
              </ImageBackground>
              <Box w="100%" h="10%" bg="white">
        <Image source={SvgImage} alt="logo" w="100%" h="100%" />   
        </Box>
          </Box>
       
        <Box w="100%" h="15%" bg="white" borderRadius={"10"} alignItems={"center"}>
        <LinearGradient 
    colors={['rgba(71, 1, 63, 0.8)', 'rgba(140, 18, 121, 0.8)', 'rgba(140, 18, 121, 0.8)']}
    style={styles.gradient}>
     <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />     
                        <Box
                            style={{
                                flex: 1,
                                
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                        <ParallaxImage source={imageLive} alt="logo" style={styles.image2}/>
                          
                            <Text style={styles.text}>
                                Live Session
                            </Text>

                          
                            
                        </Box>
                   

            </LinearGradient>
            


        </Box>
        
    </Stack>
    </NativeBaseProvider>


        
   
  )
}

