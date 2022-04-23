import React, { FC } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Dashboard, Input, LiveValue, Results } from "../screens"
const Stack = createNativeStackNavigator()

const Appstack: FC = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen name="Input" component={Input} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Results" component={Results} options={{
        headerShown: false
      }} />

      {/* <Stack.Screen name="LiveValue" component={LiveValue} options={{
        headerShown: false
      }} /> */}

      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  )
}
export default Appstack