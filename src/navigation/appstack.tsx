import React, { FC } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, Dashboard } from "../screens"
const Stack = createNativeStackNavigator()

const Appstack: FC = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  )
}
export default Appstack