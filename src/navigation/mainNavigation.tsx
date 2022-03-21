import React, { FC, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import Appstack from "./appstack";
import AuthStack from "./authstack";

const MainNav: FC = () => {
  const [user, setUser] = useState<any>(null);
  const bootstrap = () => {

    auth().onAuthStateChanged(_user => {
      if (_user) {
        setUser(_user);
      }
    })
  }
  useEffect(() => {
    bootstrap()
  }, [])
  return (
    <NavigationContainer>
      {user !== null ? <Appstack /> : <AuthStack />}
    </NavigationContainer>
  )
}
export default MainNav;