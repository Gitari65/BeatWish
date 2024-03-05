import React from 'react';
import { Stack, NativeBaseProvider, Box, HStack, Avatar, Image, VStack } from 'native-base';
import { Text, View, Dimensions, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native';
import { useFonts, Merienda_400Regular } from "@expo-google-fonts/merienda";
import SvgImage from "../../assets/img/svgGradient.png";
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import imageSource from "../../assets/img/djdeck.png";
import imageDeck from "../../assets/img/deckscene.jpeg";
import liveImage from "../../assets/img/computer.png";
import djScene from "../../assets/img/djscene.jpg";

const sliderWidth = Dimensions.get('window').width;
const itemWidth = 200; // Adjust as needed
const handleJoinLive = () => {
  console.log("Join Live");
}



export default class HomeTab extends React.Component {
  _renderItem = ({ item, index }) => {
    return (
      <Stack style={[styles.slide,{borderRadius:20}]}>
      <ImageBackground source={item.image} style={{flex: 1, resizeMode: "cover",width:"100%"}}>
          <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center">
            <Image source={liveImage} style={styles.liveSessionImage} />
            <Text style={styles.sessionTitle}>{item.title}</Text>
            <TouchableOpacity onPress={handleJoinLive} style={styles.sessionButton}>
                    <LinearGradient
                        colors={['#47013F', '#8C1279', '#8C1279']}
                        style={styles.gradient}>
                        <Text style={styles.sessionTitle}>Join</Text>
                      </LinearGradient>
              </TouchableOpacity>
           </Box>
   
      </ImageBackground>
      </Stack>

    );
  }


  render() {
    const data = [
      { title: 'Live 1' ,image:djScene},
      { title: 'Live 2' ,image:djScene},
      { title: 'Live 3',image:djScene},
    ];

    return (
      <NativeBaseProvider>
        <Stack space={4} w="100%" h="100%" marginTop={10}>
          <Box w="100%" h="15%" bg="white" borderRadius={10} backgroundColor="amber.100">
            <ImageBackground source={imageSource} style={{flex: 1, resizeMode: "cover"}}>
                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                        <HStack space={2} h="30%" marginTop={2} >
                                <Avatar bg="green.500" style={styles.imageAvatar} source={{
                                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }}>
                                </Avatar>
                                <VStack space={1} h="100%" >
                                  <Text color="white" style={styles.text2} fontSize="md" bold>
                                  Good Morning,
                                  </Text>
                                  <Text color="white"    style={styles.text2}  >
                                    Janet
                                  </Text>
                                </VStack>
       
                        </HStack>
                    
                    </Box>
             </ImageBackground>
          </Box>
          <Box w="100%" h="15%" bg="white" borderRadius={10} alignItems="center">

              <Carousel
                data={data}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                autoplay={true}
                loop={true}
                autoplayInterval={4500}
              

              />
          
          </Box>
          <Box w="100%" h="50%" bg="white" borderRadius={10} >
              <Text style={styles.mySessionTitle}>My Sessions</Text>
              <HStack w="100%" h="100%" bg="white" borderRadius={10}   backgroundColor={"white"}  marginTop={2}>
                   <Box w="50%" h="50%" bg="white" borderRadius={10}   backgroundColor={"white"} >
                                   

                   <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                      <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                        
                        <Text style={styles.sessionTitle}>Java Night</Text>
                        {/* <TouchableOpacity onPress={handleJoinLive} style={styles.sessionButton}>
                                <LinearGradient
                                    colors={['#47013F', '#8C1279', '#8C1279']}
                                    style={styles.gradient}>
                                    <Text style={styles.sessionTitle}>Join</Text>
                                  </LinearGradient>
                          </TouchableOpacity> */}
                      </ImageBackground>
            
           </Box>


                    </Box>   
              </HStack>
          </Box>
        </Stack>
      </NativeBaseProvider>
    );
  }
}
   
const styles = StyleSheet.create(  {
  text: {
    fontFamily: "Merienda",
    color: "white",
    alignContent: "center",
    fontSize:28

  },   button: {
    width: '70%',
    height: 45,
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
        borderRadius: 30,
      },image2:{
        width: 70,
        height: 70,
        
      },slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Merienda",

    },
    sessionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "white",
      fontFamily: "Merienda",
  },
  sessionButton: {
    width: '50%',
    height: 26,
  
  },
  liveSessionImage: {
    width: 50,
    height: 50,
  },
  mySessionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    fontFamily: "Merienda",
},
mySessionItem: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  borderRadius: 20
},
  
}
);


