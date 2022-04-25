import React, { FC } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup } from "../screens"
import { Home, Dashboard, Input, LiveValue, Results } from "../screens"


const Stack = createNativeStackNavigator()

const AuthStack: FC = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Input" component={Input} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Results" component={Results} options={{
        headerShown: false
      }} />

      <Stack.Screen name="LiveValue" component={LiveValue} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}
export default AuthStack