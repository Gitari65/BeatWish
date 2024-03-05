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
import { ChatTab } from "../screens/BottomTabs/ChatTab";
import ScanTab from "../screens/BottomTabs/ScanTab";

const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
const screenOptionStyle = {
  headerShown: false,
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
            
                <Tab.Navigator  
                screenOptions={
                  {
                    headerShown: false,
                    tabBarActiveTintColor: '#8C1279',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                      backgroundColor: 'white',
                      borderTopColor: 'transparent',
                    },
                  }
                }>
                 <Tab.Screen name="HomeTab" component={HomeTab}
                 options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                  }
                 }
                  />
           
                  <Tab.Screen name="ScanTab" component={ScanTab}
                options={{
                  headerShown: false,
                    tabBarLabel: 'Scan',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
                    ),
                  }
                }
                />
                <Tab.Screen name="SessionTab" component={SessionTab}
                options={{
                  headerShown: false,
                    tabBarLabel: 'Session',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="music" color={color} size={size} />
                    ),
                  }
                }
                />
                     <Tab.Screen name="ChatTab" component={ChatTab}
                     options={
                      {
                        headerShown: false,
                        tabBarLabel: 'Chat',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="chat" color={color} size={size} />
                        ),
                      
                      }
                     }
               
                />
              
    
                </Tab.Navigator>
            )
    }

export default AppNavigation;