import React, { FC } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup } from "../screens"
const Stack = createNativeStackNavigator()

const AuthStack: FC = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default AuthStack