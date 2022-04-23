import React from "react";
import { FC, useState } from 'react'
import { ImageBackground, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width;
const App: FC = (props) => {
  const navigation = useNavigation()
  const image = { uri: "https://images.pexels.com/photos/1687341/pexels-photo-1687341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  const [K, setK] = useState(0)
  const [N, setN] = useState(0)
  const [P, setP] = useState(0)
  const [ph, setph] = useState(0)
  function plantdecider() {
    if (ph > 12) {
      const plant = "Grapes"
      console.log("Grapes")
      props.navigation.navigate('Results', { plant: plant })
    }
    else if (ph > 10) {
      const plant = "Rice"
      console.log("Rice")
      props.navigation.navigate('Results', { plant: plant, token: "c8a2a1c8-9fc8-47bb-8486-45387105a178" })


    }
    else if (ph < 2) {
      const plant = "Coconut"
      console.log("Coconut")
      props.navigation.navigate('Results', { plant: plant })

    }
    else if (ph < 5) {
      const plant = "Cotton"
      console.log("cotton")
      props.navigation.navigate('Results', { plant: plant })


    }
    else if (ph > 5) {
      const plant = "Pumpkin"
      console.log("Pumpkin")
      props.navigation.navigate('Results', { plant: plant, token: "b744a3f8-5400-40f5-bf83-41c20ad86a1f" })

    }
    else if ((N >= 0.5) && (N <= 1.5) && (ph <= 3.5)) {
      const plant = "Apple"
      console.log("Apple")
      props.navigation.navigate('Results', { plant: plant })

    }
    else if ((P > 1) && (P <= 2.5) && (ph <= 3.5) && (ph <= 7.5)) {
      const plant = "Banana"
      console.log("Banana")
      props.navigation.navigate('Results', { plant: plant })

    }
    else if ((K > 3) && (P <= 3.5) && (ph >= 7.5)) {
      const plant = "Rice"
      console.log("Rice")
      props.navigation.navigate('Results', { plant: plant })

    }
  }

  return (
    <ImageBackground source={image} resizeMode='cover' style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', }} >
          <View style={{ marginTop: '10%', height: 210, width: width - 250, backgroundColor: '#005555', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: 'white' }}>Potassium value</Text>
            <TextInput style={{ height: 160, width: width - 275, backgroundColor: 'white', fontSize: 50, fontFamily: 'Poppins-Light', borderRadius: 15 }} placeholderTextColor="black" onChangeText={setK} color="black" keyboardType={"number-pad"} textAlign={'center'} />

          </View>

          <View style={{ marginTop: '10%', marginLeft: 50, height: 210, width: width - 250, backgroundColor: '#005555', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: 'white' }}>Nitrogen value</Text>
            <TextInput style={{ height: 160, width: width - 275, backgroundColor: 'white', fontSize: 50, fontFamily: 'Poppins-Light', borderRadius: 15 }} placeholderTextColor="black" onChangeText={setN} color="black" keyboardType={"number-pad"} textAlign={'center'} placeholderText="K" />

          </View>


        </View>
        <View style={{ flexDirection: 'row' }} >
          <View style={{ marginTop: '20%', height: 210, width: width - 250, backgroundColor: '#005555', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: 'white' }}>Phosphorus value</Text>
            <TextInput style={{ height: 160, width: width - 275, backgroundColor: 'white', fontSize: 50, fontFamily: 'Poppins-Light', borderRadius: 15 }} placeholderTextColor="black" onChangeText={setP} color="black" keyboardType={"number-pad"} textAlign={'center'} />
          </View>
          <View style={{ marginTop: '20%', marginLeft: 50, height: 210, width: width - 250, backgroundColor: '#005555', alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: 'white' }}>Ph value</Text>
            <TextInput style={{ height: 160, width: width - 275, backgroundColor: 'white', fontSize: 50, fontFamily: 'Poppins-Light', borderRadius: 15 }} placeholderTextColor="black" onChangeText={setph} color="black" keyboardType={"number-pad"} textAlign={'center'} placeholderText="K" />
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <TouchableOpacity style={{ width: width - 50, height: 60, backgroundColor: '#005555', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }} onPress={plantdecider}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 20 }}>
            Find Suitable Plant
          </Text>
        </TouchableOpacity>
      </View>


    </ImageBackground >

  )

}
export default App;