import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Home = () => {
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        </View>
    );
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });
    export default Home;