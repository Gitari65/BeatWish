import { Stack,Image, WarningOutlineIcon,Input, Icon,FormControl, Pressable,useTheme,NativeBaseProvider,Box,Button,Text } from "native-base";
import { StyleSheet,ImageBackground,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import Svg, { Path, err } from "react-native-svg";
import svImageSource from "../assets/img/svg.png";
import { Merienda_400Regular ,useFonts} from "@expo-google-fonts/merienda";
import musicPic from "../assets/img/music.png";
import { useNavigation } from "@react-navigation/native";
import {supabase} from "../config/supabaseconfig";
import SpinnerComponent from "../constants/SpinnerComponent";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

   const navigation = useNavigation();
    const handleSignup = () => {
      if(email===""|| password===""||confirmPassword===""){
        alert("All fields required")
        setLoading(false);
        return
      }
     
      // navigation.navigate("Home",{screen:"HomeTab"});
      if(password === confirmPassword){
        setLoading(true);
        supabase.auth.signUp({
          email: email,
          password: password
        }).then((response)=>{
          setLoading(false);
          if(response.error){
            alert(response.error.message);
          }else{
            alert("Account created successfully");
            navigation.navigate("Login");
          }
        });

    }
    
  }
const moveToSignin=()=>{
      navigation.navigate("Login");
    }
  let [fontsLoaded] = useFonts({
    Merienda:
      Merienda_400Regular
    });

    const styles = StyleSheet.create({
      imageBackground: {
        flex: 1,
        resizeMode: "cover",
      },
      text: {
        fontFamily: "Merienda",
        color: "white",
      },
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

    const saveUserDetails=async()=>{
      
        const { error } = await supabase
        .from('users')
        .insert({ id: 1, name: 'Denmark' })
        if(error) alert(error);
   
            }
            
           
  return (
<NativeBaseProvider>
  <Stack space={0} w="100%" h={"100%"} alignItems="center" direction={"column"} backgroundColor={"#000940"}>

 
        <Box w="100%" h="35%" bg="white" alignItems="center"  backgroundColor={"#000940"} >
        <ImageBackground source={musicPic} style={styles.imageBackground}>
      <Box flex={1} bg="rgba(0, 9, 64, 0.5)" alignItems="center" justifyContent="center">
        <Box w="100%" h="35%" alignItems="center" justifyContent="center">
          <FormControl alignItems="center">
            <Text fontSize="3xl" style={styles.text} color="muted.700" _dark={{ color: "muted.300" }}>
              Welcome to Beat Wish
            </Text>
          </FormControl>
        </Box>
      </Box>
    </ImageBackground>
           
              
        </Box>
        <Image  source={svImageSource} w={"100%"} h={"15%"} alt="logo"/>

        <Box w="100%" h="50%" bg="white" alignItems="center"  >
        
         <FormControl alignItems={"center"} space={3} >
              
              <Input
              w={{
                base: "75%",
                md: "25%"
              }}
              InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />}
              placeholder="Email"
              variant={"underlined"}
              value={email}
              onChangeText={(text)=>setEmail(text)}
              
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
                <Input
                  w={{
                    base: "75%",
                    md: "25%"
                  }}
                  type={show ? "text" : "password"}
                  InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>
                  }
                  placeholder="Password" variant={"underlined"} 
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
                <Input
                  w={{
                    base: "75%",
                    md: "25%"
                  }}
                  type={show ? "text" : "password"}
                  InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>
                  }
                  placeholder="Confirm Password" variant={"underlined"} 
                  value={confirmPassword}
                  onChangeText={(text)=>setConfirmPassword(text)}
                />
              
              <TouchableOpacity onPress={handleSignup} style={styles.button}>
                      <LinearGradient
                        colors={['#47013F', '#8C1279', '#8C1279']}
                        style={styles.gradient}>
                        {loading?(<SpinnerComponent/>):(<Text style={styles.text}>Signup</Text>)}
                        
                      </LinearGradient>
              </TouchableOpacity>
              <Text fontSize="sm" color="muted.700" _dark={{ color: "muted.300" }} onPress={moveToSignin}>
                  Already have an account?{" "}
                  <Text bold color="primary.500" _dark={{ color: "primary.300" }}>
                    Sign in
                  </Text>
                </Text>
            
            </FormControl>
        </Box>
     
     
    </Stack>
</NativeBaseProvider>
    
  );


};

export default Signup;
