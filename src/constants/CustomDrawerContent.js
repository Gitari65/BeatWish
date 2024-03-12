import React from "react";
import { View, Text, StyleSheet, Image ,ImageBackground} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Avatar, NativeBaseProvider, Stack ,HStack,VStack,Box} from "native-base";
import imageSource from "../assets/img/djdeck.png";

const CustomDrawerHeader = () => {
  return (
    <NativeBaseProvider>
        <Stack style={styles.headerContainer}>
               <Box w="100%" h="100%" bg="white" borderRadius={10} backgroundColor="amber.100">
                    <ImageBackground  source={imageSource} style={{flex: 1, resizeMode: "cover"}}>
                            <Box flex={1} bg="rgba(0, 9, 64, 0.8)" >
                                <HStack space={2} h="100%"  >
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
    </Stack> 
    </NativeBaseProvider>
   
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawerHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height:120,
    
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },  imageAvatar:{
       
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
  },  text: {
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
});

export default CustomDrawerContent;
