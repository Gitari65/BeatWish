import { Stack,Image, WarningOutlineIcon,Input, Icon,FormControl, Pressable,useTheme,NativeBaseProvider,Box,Button,Text } from "native-base";
import { StyleSheet,ImageBackground,TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useState,useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import svImageSource from "../assets/img/svg.png";
import { Merienda_400Regular ,useFonts} from "@expo-google-fonts/merienda";
import musicPic from "../assets/img/music.png";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../config/supabaseconfig";
import SpinnerComponent from "../constants/SpinnerComponent";
import AlertDialog from "../constants/AlertDialog";

const Login = () => {
  const [show, setShow] = useState(false);
   const navigation = useNavigation();
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginSuccess,setLoginSuccess]=useState("")
    const [errorMessage,setErrorMessage]=useState("");
    const [userSession,setuserSession]=useState("");
    
    useEffect(() => {
      // Check if the user is already logged in
      const checkUserLoggedIn = async () => {
        try {
          const { data: user, error } = await supabase.auth.getUser();
          if (user) {
            // User is logged in, navigate to home page
            navigation.navigate('Home');
          }
        } catch (error) {
          console.error('Error checking user login status:', error.message);
        }
      };
  
      checkUserLoggedIn();
    }, []);
  let [fontsLoaded] = useFonts({
    Merienda:
      Merienda_400Regular
    });
    const moveToSignup=()=>{
      navigation.navigate("Signup");
    }

  const handleLogin = () => {
      
        // navigation.navigate("Home",{screen:"HomeTab"});
        setLoading(true);
        if(email===""|| password===""){
          alert("All fields required")
          setLoading(false);
          return
        }
        if(email !== "" && password !== ""){
          supabase.auth.signInWithPassword({
            email: email,
            password: password
          }).then((response)=>{
            setLoading(false);
            if(response.error){
              setErrorMessage(response.error.message);
              setLoginSuccess(false);
              setLoading(false);
            }else{
              navigation.navigate("Home",{screen:"HomeTab"});
              setLoginSuccess(true);
            }
          });
        }

      }
 

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
    
  return (
<NativeBaseProvider>
  <Stack space={0} w="100%" h={"100%"} alignItems="center" direction={"column"} backgroundColor={"#000940"}>

 
        <Box w="100%" h="35%" bg="white" alignItems="center"  backgroundColor={"#000940"} >
        <ImageBackground source={musicPic} style={styles.imageBackground}>
      <Box flex={1} bg="rgba(0, 9, 64, 0.5)" alignItems="center" justifyContent="center">
        <Box w="100%" h="35%" alignItems="center" justifyContent="center">
          <FormControl alignItems="center">
            <Text fontSize="4xl" style={styles.text} color="muted.700" _dark={{ color: "muted.300" }}>
              Welcome Back
            </Text>
          </FormControl>
        </Box>
      </Box>
    </ImageBackground>
           
              
        </Box>
        <Image  source={svImageSource} w={"100%"} h={"15%"} alt="logo"/>

        <Box w="100%" h="50%" bg="white" alignItems="center"  >
        
         <FormControl alignItems={"center"} >
         {/* <AlertDialog status={loginSuccess ? 'success' : 'error'} text={errorMessage} /> */}
              
              <Input
              w={{
                base: "75%",
                md: "25%"
              }}
              InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />}
              placeholder="Email"
              variant={"underlined"}
              value={email}
              onChangeText={(text) => setEmail(text)}
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
                <Text fontSize="sm" color="muted.700" _dark={{ color: "muted.300" }} onPress={moveToSignup}>
                  Don't have an account?{" "}
                  <Text bold color="primary.500" _dark={{ color: "primary.300" }}>
                    Sign Up
                  </Text>
                </Text>
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                      <LinearGradient
                        colors={['#47013F', '#8C1279', '#8C1279']}
                        style={styles.gradient}>
                        {loading?(<SpinnerComponent/>):(<Text style={styles.text}>Login</Text>) }
                       
                      </LinearGradient>
              </TouchableOpacity>
                <Text fontSize="sm" color="muted.700" _dark={{ color: "muted.300" }}>
                  Forgot Password?{" "}
                  <Text bold color="primary.500" _dark={{ color: "primary.300" }}>
                    Reset
                  </Text>
                </Text>
            </FormControl>
        </Box>
     
     
    </Stack>
</NativeBaseProvider>
    
  );


};

export default Login;
