import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from '../screens/Welcome';
import Login from "../screens/Login";
import Session from "../screens/Session";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabBar,createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTab from "../screens/BottomTabs/HomeTab";
import ProfileTab from "../screens/BottomTabs/ProfileTab";
import SessionTab from "../screens/BottomTabs/SessionTab";

const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#000940",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    };

    const AppNavigation = () => {
       
            return (
                <Stack.Navigator screenOptions={screenOptionStyle}>
                   
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Session" component={Session}/>
                    <Stack.Screen name="Home" component={HomeStack}/>
                </Stack.Navigator>
            )
        };
      

    
    const HomeStack=()=>{
        return(
            
                <Tab.Navigator>
                 <Tab.Screen name="HomeTab" component={HomeTab}
                 options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                  }
                 }
                  />
                <Tab.Screen name="ProfileTab" component={ProfileTab}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                  }
                }
                />
                <Tab.Screen name="SessionTab" component={SessionTab}
                options={{
                    tabBarLabel: 'Session',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="music" color={color} size={size} />
                    ),
                  }
                }
                />
    
                </Tab.Navigator>
            )
    }

export default AppNavigation;