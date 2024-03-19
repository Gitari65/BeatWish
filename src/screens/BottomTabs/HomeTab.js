import React from 'react';
import { Stack, NativeBaseProvider,Skeleton, Box, HStack, Avatar, Image, VStack, ScrollView } from 'native-base';
import { Text, View, Dimensions, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native';
import { useFonts, Merienda_400Regular } from "@expo-google-fonts/merienda";
import SvgImage from "../../assets/img/svgGradient.png";
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import imageSource from "../../assets/img/djdeck.png";
import imageDeck from "../../assets/img/deckscene.jpeg";
import liveImage from "../../assets/img/computer.png";
import djScene from "../../assets/img/djscene.jpg";
import discImage from "../../assets/img/disc.png";
import femaleDj from "../../assets/img/femaleDj.jpg";
import clockImage from "../../assets/img/clock.png";
import locationImage from "../../assets/img/gps.png";
import { useNavigation } from "@react-navigation/native";

const sliderWidth = Dimensions.get('window').width;
const itemWidth = 200; // Adjust as needed
const handleJoinLive = () => {
  console.log("Join Live");
}






export default class HomeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [
        { title: 'Live 1' ,image:djScene},
      { title: 'Live 2' ,image:djScene},
      { title: 'Live 3',image:djScene}
    ],
    
  }

  }
  moveToProfileScreen = () => {
    console.log("Move to Profile Screen");
    const { navigation } = this.props;
    navigation.navigate('Profile');
  }
componentDidMount(){
  setTimeout(() => {
    this.setState({isLoaded:true});
  }, 3000);
}


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
    const { data,isLoaded } = this.state;

    return (
      <NativeBaseProvider>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Stack space={3}  marginTop={10}>
       

        
          <Box w="100%" h="15%" bg="white" borderRadius={10} backgroundColor="amber.100">
            <ImageBackground source={imageSource} style={{flex: 1, resizeMode: "cover"}}>
                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                        <HStack space={2} h="30%"  >
                        <TouchableOpacity onPress={moveToProfileScreen} >
                          <Avatar bg="green.500"  style={styles.imageAvatar} source={{
                                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }}>
                                </Avatar>
                        </TouchableOpacity>
                                
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
              {isLoaded?(
                 <Carousel
                data={data}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                autoplay={true}
                loop={true}
                autoplayInterval={4500}
              

              />
              ):(
                <HStack w="100%" h="100%" bg="white" borderRadius={10} alignItems="center" justifyContent="center">
                <Skeleton startColor="#000000" endColor="#666666" w={sliderWidth} h="100%" borderRadius={10} />
              </HStack>
              )}
             
          
          </Box>

          {/* My Sessions */}
          <Box w="100%" h="35%" bg="white" borderRadius={10} >
              <Text style={styles.mySessionTitle}>My Sessions</Text>
              {isLoaded?(
                   <HStack w="100%" h="50%" bg="white" borderRadius={10}   backgroundColor={"white"}  >
                   <Box w="45%" h="100%" rounded={"md"} bg="white" borderRadius={10}  margin={2} backgroundColor={"white"} >
                                   

                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                          <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                              <Box flex={1} bg="rgba(0, 9, 64, 0.8)" alignItems="center">
                                <VStack  h="69%"  >

                                {/* <Image source={discImage} alt='logo' style={styles.imageDisc}/> */}
                                      <Text style={styles.sessionTitle}>Java Night</Text>
                                      <HStack>
                                        <Image source={clockImage} alt='logo' style={styles.imageIcon}/>
                                        <Text color="white" style={styles.text3} >10:00 PM</Text>

                                      </HStack>
                                      <HStack>
                                        <Image source={locationImage} alt='logo' style={styles.imageIcon}/>
                                        <Text color="white" style={styles.text3}  >Java Club</Text>

                                      </HStack>
                                </VStack>
                            

                              
                                 <HStack space={2} h="30%"  >
                                    <Avatar bg="green.500" style={styles.imageAvatar1} source={femaleDj}>
                                   </Avatar>
                                    <Text  color="white" style={styles.text2} fontSize="md" >Dj Janet</Text>
                                  </HStack>
                               
                               
                              </Box>
                          </ImageBackground>
                
                        </Box>
                        


                    </Box> 

                    <Box w="45%" h="100%" bg="white" borderRadius={10} margin={2}  backgroundColor={"white"} >
                                   

                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                          <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                              <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                                
                                <Text style={styles.sessionTitle}>Java Night</Text>
                                {/* <TouchableOpacity onPress={handleJoinLive} style={styles.sessionButton}>
                                        <LinearGradient
                                            colors={['#47013F', '#8C1279', '#8C1279']}
                                            style={styles.gradient}>
                                            <Text style={styles.sessionTitle}>Join</Text>
                                          </LinearGradient>
                                  </TouchableOpacity> */}
                              </Box>
                          </ImageBackground>
                
                        </Box>
                        


                    </Box> 
                      
              </HStack>
              ):(
                <HStack w="100%" h="50%" bg="white" borderRadius={10} backgroundColor={"white"}>
                <Skeleton startColor="#000000" endColor="#666666" w="45%" h="100%" borderRadius={10} margin={2} />
                <Skeleton startColor="#000000" endColor="#666666" w="45%" h="100%" borderRadius={10} margin={2} />
              </HStack>
              )}
              {isLoaded?(
                 <HStack w="100%" h="50%" bg="white" borderRadius={10}   backgroundColor={"white"}  >
                   <Box w="45%" h="100%" bg="white" borderRadius={10}  margin={2} backgroundColor={"white"} >
                                   

                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                          <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                              <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                                
                                <Text style={styles.sessionTitle}>Java Night</Text>
                                
                              </Box>
                          </ImageBackground>
                
                        </Box>
                        


                    </Box> 

                    <Box w="45%" h="100%" bg="white" borderRadius={10} margin={2}  backgroundColor={"white"} >
                                   

                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                          <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                              <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                                
                                <Text style={styles.sessionTitle}>Java Night</Text>
                                {/* <TouchableOpacity onPress={handleJoinLive} style={styles.sessionButton}>
                                        <LinearGradient
                                            colors={['#47013F', '#8C1279', '#8C1279']}
                                            style={styles.gradient}>
                                            <Text style={styles.sessionTitle}>Join</Text>
                                          </LinearGradient>
                                  </TouchableOpacity> */}
                              </Box>
                          </ImageBackground>
                
                        </Box>
                        


                    </Box> 
                      
              </HStack>
              ):(
                <HStack w="100%" h="50%" bg="white" borderRadius={10} backgroundColor={"white"}>
                <Skeleton startColor="#000000" endColor="#666666" w="45%" h="100%" borderRadius={10} margin={2} />
                <Skeleton startColor="#000000" endColor="#666666" w="45%" h="100%" borderRadius={10} margin={2} />
              </HStack>
              )}
           
             
          </Box>
          {/* End My Sessions */}

          {/*Joined Sessions */}
          <Box w="100%" h="35%" bg="white" borderRadius={10} >
              <Text style={styles.mySessionTitle}>Joined Sessions</Text>
              <HStack w="100%" h="50%" bg="white" borderRadius={10}   backgroundColor={"white"}  >
                   <Box w="45%" h="100%" bg="white" borderRadius={10}  margin={2} backgroundColor={"white"} >
                                   

                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                          <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                              <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                                
                                <Text style={styles.sessionTitle}>Java Night</Text>
                                {/* <TouchableOpacity onPress={handleJoinLive} style={styles.sessionButton}>
                                        <LinearGradient
                                            colors={['#47013F', '#8C1279', '#8C1279']}
                                            style={styles.gradient}>
                                            <Text style={styles.sessionTitle}>Join</Text>
                                          </LinearGradient>
                                  </TouchableOpacity> */}
                              </Box>
                          </ImageBackground>
                
                        </Box>
                        


                    </Box> 

                    <Box w="45%" h="100%" bg="white" borderRadius={10} margin={2}  backgroundColor={"white"} >
                                   

                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                          <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                              <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                                
                                <Text style={styles.sessionTitle}>Java Night</Text>
                                {/* <TouchableOpacity onPress={handleJoinLive} style={styles.sessionButton}>
                                        <LinearGradient
                                            colors={['#47013F', '#8C1279', '#8C1279']}
                                            style={styles.gradient}>
                                            <Text style={styles.sessionTitle}>Join</Text>
                                          </LinearGradient>
                                  </TouchableOpacity> */}
                              </Box>
                          </ImageBackground>
                
                        </Box>
                        


                    </Box> 
                      
              </HStack>
              <HStack w="100%" h="50%" bg="white" borderRadius={10}   backgroundColor={"white"}  >
                   <Box w="45%" h="100%" bg="white" borderRadius={10}  margin={2} backgroundColor={"white"} >
                                   

                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                          <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                              <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                                
                                <Text style={styles.sessionTitle}>Java Night</Text>
                                {/* <TouchableOpacity onPress={handleJoinLive} style={styles.sessionButton}>
                                        <LinearGradient
                                            colors={['#47013F', '#8C1279', '#8C1279']}
                                            style={styles.gradient}>
                                            <Text style={styles.sessionTitle}>Join</Text>
                                          </LinearGradient>
                                  </TouchableOpacity> */}
                              </Box>
                          </ImageBackground>
                
                        </Box>
                        


                    </Box> 

                    <Box w="45%" h="100%" bg="white" borderRadius={10} margin={2}  backgroundColor={"white"} >
                                   

                      <Box flex={1} bg="rgba(0, 9, 64, 0.8)" height={"0.5"} alignItems="center" justifyContent="center" style={styles.mySessionItem}>
                          <ImageBackground source={djScene} style={{flex: 1, resizeMode: "cover",width:"100%",borderRadius:20}}>
                              <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                                
                                <Text style={styles.sessionTitle}>Java Night</Text>
                                {/* <TouchableOpacity onPress={handleJoinLive} style={styles.sessionButton}>
                                        <LinearGradient
                                            colors={['#47013F', '#8C1279', '#8C1279']}
                                            style={styles.gradient}>
                                            <Text style={styles.sessionTitle}>Join</Text>
                                          </LinearGradient>
                                  </TouchableOpacity> */}
                              </Box>
                          </ImageBackground>
                
                        </Box>
                        


                    </Box> 
                      
              </HStack>
          </Box>
          {/* End Joined Sessions */} 
         
        </Stack>
        </ScrollView>
        
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
      text3: {
        fontFamily: "Merienda",
        color: "white",
        alignContent: "center",
        fontSize: 10
    
        },
      imageAvatar:{
       
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "white",
        marginLeft: 10,
      },
      imageAvatar1:{
        width: 30,
        height: 30,
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
imageDisc:{
  width: 30,
  height: 30,
  marginTop: 10
},imageIcon:{
  width:15,
  height: 15,
  marginTop: 10
}
  
}
);


