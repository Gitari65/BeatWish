import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home'
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    };

    const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="Welcome" component={Welcome}/>
        </Stack.Navigator>
    );
}

export default HomeStack;