import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
import { useFonts,Montserrat_200ExtraLight,Montserrat_400Regular } from "@expo-google-fonts/montserrat"; 
import logoImage from '../assets/img/logo2.png';
import { Merienda_300Light,Merienda_400Regular } from "@expo-google-fonts/merienda";


const Welcome = () => {
    let [fontsLoaded] = useFonts({
      Merienda:
        Merienda_400Regular
      });
    return (
        <View style={styles.container}>
        
        <Image source={logoImage} style={styles.imageStyle} alt="logo"/>
        <Text style={styles.text}>Beat Wish</Text>
        <Text style={styles.text2}>Request the Beat, Set the Heat!</Text>
        </View>
    );
    }

    const styles=StyleSheet.create({
        container: {
            flex: 1,
            
            alignItems: "center",
            backgroundColor:"#000940"
        },
        text:{
            fontFamily: 'Merienda',
            color:"white",
            transform:"translateY(30px)",
            fontSize:30,
            width:150
        },
        imageStyle:{
            width: 220,
            height: 220,
        },
        text2:{
            color:"#CFA118",
            fontSize:20,
            transform:"translateY(30px)",
            fontFamily: 'Merienda',
        },
        text3:{
            color:"white",
            fontSize:22
        }

    });

export default Welcome;