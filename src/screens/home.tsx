import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';
import { FC, useState } from 'react'
import React from 'react'
import { Button } from '../components'
import firestore from '@react-native-firebase/firestore';
const image = { uri: "https://images.pexels.com/photos/1687341/pexels-photo-1687341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
const image1 = { uri: "https://static.vecteezy.com/system/resources/previews/003/813/443/non_2x/plant-growing-from-soil-free-vector.jpg" }
const App: FC = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [k, setk] = useState(0)
  const [p, setp] = useState(0)
  const [N, setN] = useState(0)
  const [plant, setplant] = useState('Plant')
  const [ph, setph] = useState(0)
  // function onResult(QuerySnapshot) {
  //   console.log('Got Users collection result.');
  //   const data = QuerySnapshot["_data"]
  //   setk(data["K"])
  //   setp(data["P"])
  //   setN(data["N"])
  //   setph(data["Ph"])
  //   console.log(k)

  // }
  // function onError(error) {
  //   console.error(error);
  // }
  // firestore().collection('Users').doc('sensor reading').onSnapshot(onResult, onError);
  // // function getdata() {


  //   // firestore()
  //   //   .collection('Users')
  //   //   .doc('sensor reading')
  //   //   .get()
  //   //   .then(documentSnapshot => {
  //   //     console.log('User exists: ', documentSnapshot.exists);

  //   //     if (documentSnapshot.exists) {
  //   //       console.log('User data: ', documentSnapshot.data());
  //   //     }
  //   //   });
  // }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{ marginLeft: "20%", marginTop: "50%", }}>
        <View >
          <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 55, color: "white" }}>
            Plant
          </Text>
          <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 55, color: "white" }}>
            Detection
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 24, color: "white", fontFamily: 'Poppins-Light' }}>
            It tells you what plant
          </Text>
          <Text style={{ fontSize: 24, color: "white", fontFamily: 'Poppins-Light' }}>
            to grow
          </Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: "10%", flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ width: width - 250, height: 200, backgroundColor: 'white', borderRadius: 10, marginRight: 50, alignItems: 'center', justifyContent: 'center', }}>
          <Image style={{ height: 100, width: 100, }} source={image1} />
          <Text style={{ color: 'black', fontFamily: 'Poppins-Light', }}> Give Manual Input</Text>

        </View>
        <View style={{ width: width - 250, height: 200, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../data/pic/37159744.jpg')} style={{ height: 150, width: 150 }} />
          <Text style={{ color: 'black', fontFamily: 'Poppins-Light' }}> Read from Sensor</Text>
        </View>
      </View>


    </ImageBackground >

  )
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
  }
})