import { Stack, WarningOutlineIcon,Input, Icon,FormControl, Pressable,useTheme,NativeBaseProvider,Box,Button,Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import Svg, { Path } from "react-native-svg";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
<NativeBaseProvider>
  <Stack space={4} w="100%" h={"100%"} alignItems="center" direction={"column"} backgroundColor={"#000940"}>
  <Box w="100%" h="10%" bg="white" alignItems="center" >
   <FormControl alignItems={"center"} >
  <Text fontSize="xl" color="muted.700" _dark={{ color: "muted.300" }}>
        Welcome to BeatWish
      </Text>
    
      </FormControl>
  </Box>

  <Box w="100%" h="50%" bg="white" alignItems="center" > <FormControl alignItems={"center"}>
         <Input
        w={{
          base: "75%",
          md: "25%"
        }}
        InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
        placeholder="Name"
        variant={"underlined"}
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
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>
        }
        placeholder="Password" variant={"underlined"} 
      />
      <Text fontSize="sm" color="muted.700" _dark={{ color: "muted.300" }}>
        Don't have an account?{" "}
        <Text bold color="primary.500" _dark={{ color: "primary.300" }}>
          Sign Up
        </Text>
      </Text>
      <Button w={{
          base: "75%",
          md: "25%"
        }} colorScheme="secondary" variant="outline">
        Login
      </Button>
      
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
