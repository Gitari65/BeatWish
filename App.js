 import React  from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import AppNavigation from "./src/navigator/Navigation";
 import { useEffect ,useState} from "react";
 import Welcome from "./src/screens/Welcome";


  export default function App() {
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsLoading(false);
        },3000);

        return ()=>clearTimeout(timer);

    },[])
    return (
      <NavigationContainer>
      {
      isLoading?(<Welcome/>) : (<AppNavigation />)
      }
       
       
      </NavigationContainer>
    );
  }

