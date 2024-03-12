import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from '../screens/Welcome';
import  Signup from "../screens/Signup";
import Login from "../screens/Login";
import Session from "../screens/Session";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabBar,createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomDrawerContent from "../constants/CustomDrawerContent";

import HomeTab from "../screens/BottomTabs/HomeTab";
import ProfileTab from "../screens/BottomTabs/ProfileTab";
import SessionTab from "../screens/BottomTabs/SessionTab";
import { ChatTab } from "../screens/BottomTabs/ChatTab";
import ScanTab from "../screens/BottomTabs/ScanTab";
import { createDrawerNavigator } from "@react-navigation/drawer";



const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
                <Stack.Screen name="Signup" component={Signup}/>
                   
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Session" component={Session}/>
                    <Stack.Screen name="Home" component={DrawerNavigation}/>
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
    const DrawerNavigation=()=>{
        return(
            <Drawer.Navigator  drawerContent={(props)=> <CustomDrawerContent{...props}/>}>
                <Drawer.Screen name="Home" component={HomeStack}
                  options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                  
                  }
                  }
                />
                <Drawer.Screen name="Profile" 
                component={ProfileTab}
                  options={{
                    drawerIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                  }}
                />
            </Drawer.Navigator>
        )
    }

export default AppNavigation;