import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home'
import Welcome from '../screens/Welcome';
import Login from "../screens/Login";
import Session from "../screens/Session";

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#000940",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    };

    const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Welcome" component={Welcome}/> */}
            {/* <Stack.Screen name="Login" component={Login}/> */}
        <Stack.Screen name="Session" component={Session}/>
        </Stack.Navigator>
    );
}

export default HomeStack;