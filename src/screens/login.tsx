import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FC, useState } from 'react'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { Input, Button } from '../components'
import { useNavigation } from '@react-navigation/native';
import AuthStack from '../navigation/authstack';
const App: FC = (props) => {
  const [email, setemail] = useState<any>(null)
  const [password, setpassword] = useState<any>(null)
  const navigation = useNavigation()
  const textcolor = 'black'
  const login = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password)
      if (user) {
        navigation.navigate('Home')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'black' }}>Login</Text>
      <Input ph="E-mail" oct={(text) => setemail(text)} textcolor={textcolor} secureTextEntry={false} />
      <Input ph="Password" oct={(text) => setpassword(text)} secureTextEntry={true} textcolor={textcolor} />
      <Button title="Log in" width={100} height={50} color="black" onPress={login} />
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