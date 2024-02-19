import { Box, NativeBaseProvider, Stack,Image,Text } from "native-base";
import QRCode from "react-native-qrcode-svg";
import discImage from "../assets/img/disc.png";
import { StyleSheet } from "react-native";
import { Merienda_400Regular,useFonts } from "@expo-google-fonts/merienda";
import downloadImage from "../assets/img/download.png";
import shareImage from "../assets/img/share.png";   
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Session() {
    let [fontsLoaded] = useFonts({
        Merienda:
          Merienda_400Regular
        });

  const styles = StyleSheet.create(  {
        text: {
          fontFamily: "Merienda",
          color: "white",
          alignContent: "center",
    
        },
        text2: {
            fontFamily: "Merienda",
            color: "black",
            alignContent: "center",
        
            },
      }
    );

    return (
        <NativeBaseProvider>
        <Stack space={0} w="100%" h={"100%"} alignItems="center" direction={"column"} backgroundColor={"#000940"}>
          <Box w="80%" h="70%" bg="white" alignItems="center"  backgroundColor={"#000940"} >
           <Text fontSize="16px" w={"100%"} style={styles.text} color="muted.700" _dark={{ color: "muted.300" }}>
           Scan the QR code to join  session
           </Text>
              <Box w="100%" h="100%" bg="white" borderRadius={"10"} alignItems="center"  backgroundColor={"white"} >
                   <Box w="100%" h="80%"  alignItems="center"   >
                            <Image source={discImage} w={"60"} h={"60"} alt="logo" marginTop={"2.0"}/>
                            <Text fontSize="19px"  style={styles.text2} color="muted.700" _dark={{ color: "muted.300" }}>
                            Session
                            </Text>
                            <Box w="90%" h="65%"
                            p={2}
                            margin={4}
                            
                            alignItems="center"  
                        >

                                <QRCode
                                                value="https://www.google.com"
                                                size={200}
                                                color="black"
                                               
                                            />
                        </Box>
                        <Box w="100%" h="10%" bg="white" alignItems="center"  backgroundColor={"white"} display={"flex"}  justifyContent={"center"} flexDirection={"row"} >
                            <TouchableOpacity w={"50%"}   >
                                <Box w={"100%"} alignItems={"center"}    >
                                    <Image source={downloadImage} w={"8"} h={"8"} alt="logo"/>
                                    <Text fontSize="16px" style={styles.text2} color="muted.700" _dark={{ color: "muted.300" }}>
                                        Download
                                        </Text>

                                </Box>

                            </TouchableOpacity>
                            <TouchableOpacity w={"50%"}   >
                                <Box  alignItems={"center"} justifyContent={"center"} >
                                    <Image source={shareImage} w={"8"} h={"8"} alt="logo"/>
                                    <Text fontSize="16px" style={styles.text2} color="muted.700" _dark={{ color: "muted.300" }}>
                                        Share
                                        </Text>

                                </Box>
                            </TouchableOpacity>
                    
                    

                        </Box>
                    </Box>
                </Box>
            
            </Box>
           
           
        </Stack>
        </NativeBaseProvider>
        
    );

  
    }