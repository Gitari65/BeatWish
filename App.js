 import React  from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import HomeStack from "./src/navigator/Navigation";


  export default function App() {
    return (
      <NavigationContainer>
        <HomeStack />
       
      </NavigationContainer>
    );
  }

