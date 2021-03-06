import React from "react";
import { FC, useState } from "react";
import { ImageBackground, Text, TextInput, View, Dimensions, TouchableOpacity, Image } from "react-native";

import storage from '@react-native-firebase/storage';

const App: FC = ({ route }) => {
  const ItemId = route.params
  const name = ItemId.plant
  const reference = { uri: 'https://firebasestorage.googleapis.com/v0/b/myapp-c7d77.appspot.com/o/' + name + '.jpg?alt=media&token=' + ItemId.token }
  const image = { uri: "https://images.pexels.com/photos/1687341/pexels-photo-1687341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }

  return (
    console.log(name),
    <ImageBackground source={image} resizeMode='cover' style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '50%' }}>
        <Image source={reference} style={{ height: 150, width: 150, borderRadius: 10 }} />
        <Text style={{ color: 'white', fontSize: 40, fontFamily: 'Poppins-SemiBold', marginTop: 50 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Light', color: 'white' }}>
          is the recommended crop
        </Text>
      </View>
    </ImageBackground>

  )
}
export default App