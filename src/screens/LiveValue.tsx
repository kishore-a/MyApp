import React from "react";
import { FC, useState } from "react";
import { ImageBackground, Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const App: FC = () => {
  const image = { uri: "https://images.pexels.com/photos/1687341/pexels-photo-1687341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  const [K, setK] = useState(null)
  const [N, setN] = useState(null)
  const [P, setP] = useState(null)
  const [ph, setph] = useState(null)
  function onResult(QuerySnapshot) {
    console.log('Got Users collection result.');
    const data = QuerySnapshot["_data"]
    setK(data["K"])
    setP(data["P"])
    setN(data["N"])
    setph(data["Ph"])
    console.log(K)

  }
  function onError(error) {
    console.error(error);
  }
  // firestore().collection('Users').doc('sensor reading').onSnapshot(onResult, onError);
  return (
    <ImageBackground source={image} resizeMode='cover' style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', }} >
          <View style={{ marginTop: '10%', height: 210, width: width - 250, backgroundColor: '#005555', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: 'white' }}>Potassium value</Text>
            <View style={{ height: 160, width: width - 275, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 50, fontFamily: 'Poppins-Light', borderRadius: 15, color: 'black' }} >{K}</Text>
            </View>

          </View>

          <View style={{ marginTop: '10%', marginLeft: 50, height: 210, width: width - 250, backgroundColor: '#005555', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: 'white' }}>Nitrogen value</Text>
            <View style={{ height: 160, width: width - 275, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 50, fontFamily: 'Poppins-Light', borderRadius: 15, color: 'black' }} >{N}</Text>
            </View>

          </View>


        </View>
        <View style={{ flexDirection: 'row' }} >
          <View style={{ marginTop: '20%', height: 210, width: width - 250, backgroundColor: '#005555', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: 'white' }}>Phosporous value</Text>
            <View style={{ height: 160, width: width - 275, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 50, fontFamily: 'Poppins-Light', borderRadius: 15, color: 'black' }} >{P}</Text>
            </View>

          </View>
          <View style={{ marginTop: '20%', marginLeft: 50, height: 210, width: width - 250, backgroundColor: '#005555', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: 'white' }}>Ph value</Text>
            <View style={{ height: 160, width: width - 275, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 50, fontFamily: 'Poppins-Light', borderRadius: 15, color: 'black' }} >{ph}</Text>
            </View>

          </View>


        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <TouchableOpacity style={{ width: width - 50, height: 60, backgroundColor: '#005555', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 20 }}>
            Find Suitable Plant
          </Text>

        </TouchableOpacity>
      </View>


    </ImageBackground>

  )

}
export default App;