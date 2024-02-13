import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
import { useFonts,Montserrat_200ExtraLight,Montserrat_400Regular } from "@expo-google-fonts/montserrat"; 
import logoImage from '../assets/img/logo2.png';

const Welcome = () => {
    let [fontsLoaded] = useFonts({
        Montserrat_200ExtraLight,
        Montserrat_400Regular,
      });
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Welcome Screen</Text>
        <Image source={logoImage} style={styles.imageStyle} alt="logo"/>
        </View>
    );
    }

    const styles=StyleSheet.create({
        container: {
            flex: 1,
            
            alignItems: "center",
        },
        text:{
            fontFamily: "Montserrat_400Regular",
        },
        imageStyle:{
            width: 200,
            height: 200,
        }
    });

export default Welcome;