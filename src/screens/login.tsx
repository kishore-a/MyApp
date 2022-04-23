import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FC } from 'react'
import React from 'react'
import { Input, Button } from '../components'

const App: FC = (props) => {
  const textcolor = 'black'
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'black' }}>Login</Text>
      <Input ph="E-mail" oct={(text) => console.log(text)} textcolor={textcolor} secureTextEntry={false} />
      <Input ph="Password" oct={(text) => console.log(text)} secureTextEntry={true} textcolor={textcolor} />
      <Button title="Sign Up" width={100} height={50} color="black" onPress={function (): void {
        throw new Error('Function not implemented.');
      }} />
      <View style={styles.login}>
        <Text style={styles.textcolor}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} style={{ marginHorizontal: 5 }}>
          <Text style={{ color: 'blue' }}>Signup</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  textcolor: {
    color: 'black'
  }
  ,
  login: {
    marginTop: 10,
    flexDirection: 'row',


  }
})