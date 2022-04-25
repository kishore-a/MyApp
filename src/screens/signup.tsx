import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FC, useState } from 'react'
import React from 'react'
import { Input, Button } from '../components'
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';

const App: FC = (props) => {
  const textcolor = 'black'
  const [name, setname] = useState<any>(null)
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState<any>(null)
  const signup = async () => {

    try {
      await auth().createUserWithEmailAndPassword(email, password)
      props.navigation.navigate('Login')
    } catch (e) {
      console.log(e)
      console.log(email)
    }

  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', fontSize: 30 }}>Sign Up</Text>
      <Input ph="Name" oct={(text) => { setname(text), console.log(text) }} secureTextEntry={false} textcolor="black" />
      <Input ph="E-mail" oct={(text) => setemail(text)} textcolor={textcolor} secureTextEntry={false} />
      <Input ph="Password" oct={(text) => setpassword(text)} secureTextEntry={true} textcolor={textcolor} />

      <Button title="Sign Up" width={100} height={50} color="black" onPress={signup} />

      <View style={styles.login}>
        <Text style={styles.textcolor}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ marginHorizontal: 5 }}>
          <Text style={{ color: 'blue' }}>Log In</Text>
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