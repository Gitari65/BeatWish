import { Box, NativeBaseProvider, Stack,Image,Text } from "native-base";
import QRCode from "react-native-qrcode-svg";
import discImage from "../assets/img/disc.png";
import { StyleSheet } from "react-native";
import { Merienda_400Regular,useFonts } from "@expo-google-fonts/merienda";

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
          <Box w="100%" h="90%" bg="white" alignItems="center"  backgroundColor={"white"} >
           <Text fontSize="16px" w={"100%"} style={styles.text} color="muted.700" _dark={{ color: "muted.300" }}>
           Scan the QR code to join the session
           </Text>
           <Box w="100%" h="80%" bg="white" alignItems="center"  backgroundColor={"white"} >
                    <Image source={discImage} w={"100"} h={"100"} alt="logo"/>
                    <Text fontSize="19px" style={styles.text2} color="muted.700" _dark={{ color: "muted.300" }}>
                    Session
                    </Text>
                    <Box w="90%" h="80%"
                    
                     alignItems="center"  
                     backgroundColor={"#8C1279"} >

                        <QRCode
                                        value="https://www.google.com"
                                        size={200}
                                        color="black"
                                    />
                   </Box>
             </Box>
             <Box w="100%" h="10%" bg="white" alignItems="center"  backgroundColor={"white"} >
               

                </Box>
            </Box>
           
           
        </Stack>
        </NativeBaseProvider>
        
    );

  
    }