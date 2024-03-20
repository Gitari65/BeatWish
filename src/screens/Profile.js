import React from 'react'

import { View, Text, Touchable } from 'react-native'
import { Stack,NativeBaseProvider, Box,Avatar, Center, HStack ,Divider, Icon,Modal,FormControl,Button,Input,} from 'native-base'
import {TouchableOpacity} from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableHighlight } from 'react-native-gesture-handler';


  

export default function Profile() {
 const [modalVisible, setModalVisible] = React.useState(false);
        const initialRef = React.useRef(null);
        const finalRef = React.useRef(null);
    function UpdateModal() {
       
        return <>
        <Box p={1} w="10%" borderRadius={"10"}  
        h={10}   alignItems="center" justifyContent={"center"}  >
    
          
              <Icon as={<MaterialCommunityIcons name="pencil" />}  
              onPress={() => {
            setModalVisible(!modalVisible); }} color="#8C1279" size="sm" />
           </Box>
    
            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input ref={initialRef} />
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                    setModalVisible(false);
                  }}>
                      Cancel
                    </Button>
                    <Button onPress={() => {
                    setModalVisible(false);
                  }}>
                      Save
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
            {/* <HStack space="4" justifyContent="center" alignItems="center">
              <Button onPress={() => {
              setModalVisible(!modalVisible);
            }}>
                Open Modal
              </Button>
              <Input w="32" ref={finalRef} placeholder="Enter the OTP" _light={{
              placeholderTextColor: "blueGray.700"
            }} _dark={{
              placeholderTextColor: "blueGray.100"
            }} />
            </HStack> */}
          </>;
      }

  const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
    },  imageAvatar:{
       
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "white",
      marginTop:10
      ,width:80,
      height:80
    
    },icon:{
    fontSize: 17,
    color:"#8C1279"
    },
    text: {
      fontFamily: "Merienda",
      color: "white",
      fontSize: 28
    }, text2: {
      fontFamily: "Merienda",
      color: "white",
      alignContent: "center",
      fontSize: 20
  
      },
      text3: {
        fontFamily: "Merienda",
        color: "white",
        alignContent: "center",
        fontSize: 15
    
        },
        text4:{
          
        color: "black",
        alignContent: "center",
        fontSize: 17},
        text5:{
           
        color: "black",
        alignContent: "center",
        fontSize: 15},
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    button: {
      width: '70%',
      height: 45,
    },
  });

 
  return (
  
<NativeBaseProvider>
     <Stack space={4} w="100%" style={{padding: 0}} backgroundColor="#000940">
      <Box h="30%"  w="100%"  alignItems="center">
    
        
          <Avatar bg="green.500" style={styles.imageAvatar} source={{
                                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                            }}>
                                            </Avatar>
                                            <Text style={styles.text}>Janet</Text>
                                            <Text style={styles.text3} >+254 678 8366</Text>                       
          </Box>
          <Box h="70%" w="100%" borderTopRadius={35} p={2}  backgroundColor="#F2F3F5" >
            <HStack marginLeft={10} space={6} alignItems="center">
            
              <Text style={styles.text4}>Email:</Text>
              <Text style={styles.text5} >username@gmail.com</Text> 
            </HStack>
               <Divider marginLeft={10} my="2" _light={{
              bg: "muted.800"
            }} _dark={{
              bg: "muted.50"
            }} width="70%"/>
            <HStack marginLeft={10} space={6} alignItems="center">
           
              <Text style={styles.text4}>Phone no:</Text>
              <Text style={styles.text5} >+254 678 8366</Text> 
            </HStack>
            <Divider marginLeft={10} my="2" _light={{
              bg: "muted.800"
            }} _dark={{
              bg: "muted.50"
            }} width="70%"/>
          <HStack marginLeft={10} space={6} alignItems="center" >
           
            <Text style={styles.text4}>Location:</Text>
            <Text style={styles.text5} >Nairobi, Kenya</Text>

          </HStack>
           <HStack  marginTop={10}  space={6} alignItems="center" backgroundColor={"white"} p={2} borderRadius={"10"} margin={2} >
          <Box alignItems={"center"} w={8} h={8}  justifyContent={"center"} backgroundColor={"#DE9DAC"} borderRadius={"10"} >
           <UpdateModal/>
          </Box>
              <Text style={styles.text4}>Edit Profile</Text>
          </HStack>
          <HStack  marginTop={3}  space={6} alignItems="center" backgroundColor={"white"} p={2} borderRadius={"10"} margin={2} >
          <Box alignItems={"center"} w={8} h={8}  justifyContent={"center"} backgroundColor={"#DE9DAC"} borderRadius={"10"} >
            <Icon as={<MaterialCommunityIcons name="music" />} color="#8C1279" size="sm" />
          </Box>
              <Text style={styles.text4}>My Sessions</Text>
          </HStack>
          <TouchableOpacity onPress={() => {
            setModalVisible(!modalVisible); }} alignItems={"center"} w={8} h={8}  justifyContent={"center"} backgroundColor={"#DE9DAC"} borderRadius={"10"} >
             <HStack  marginTop={10}  space={6} alignItems="center" backgroundColor={"white"} p={2} borderRadius={"10"} margin={2} >
          <Box alignItems={"center"} w={8} h={8}  justifyContent={"center"} backgroundColor={"#DE9DAC"} borderRadius={"10"} >
           <UpdateModal/>
          </Box>
              <Text style={styles.text4}>Edit Profile</Text>
          </HStack>
            </TouchableOpacity>
        
          <HStack marginTop={3} space={6} alignItems="center"  backgroundColor={"white"} p={2} borderRadius={"10"} margin={2} >
              <Box alignItems={"center"} w={8} h={8}  justifyContent={"center"} backgroundColor={"#DE9DAC"} borderRadius={"10"} >
                  <Icon as={<MaterialIcons style={styles.icon} name="lock" />} color="#8C1279" size="sm" />
              </Box>
              <Text style={styles.text4}>Change Password</Text>
          </HStack>
          <TouchableOpacity  marginTop={3} space={6} alignItems="center"  backgroundColor={"white"} p={2} borderRadius={"10"} margin={2} >
             <HStack space={6} alignItems="center"  backgroundColor={"white"} p={2} borderRadius={"10"} margin={2}>
                  <Box alignItems={"center"} w={8} h={8}  justifyContent={"center"} backgroundColor={"#DE9DAC"} borderRadius={"10"} >
                <Icon as={<MaterialIcons name="logout" />} color="#8C1279" size="sm" style={styles.icon}/>
                  
              </Box>
              <Text style={styles.text4}>Logout</Text>
             </HStack>
            
           </TouchableOpacity>



          </Box>

    </Stack>
</NativeBaseProvider>
   
  )
}
