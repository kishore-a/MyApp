import React, { FC } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
interface Props {
  ph: string;
  oct: (text: string) => void;
  secureTextEntry: boolean;
  textcolor: string;
}
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Input: FC<Props> = (props) => {
  return (
    <View style={styles.container}>

      <TextInput placeholder={props.ph} onChangeText={props.oct} secureTextEntry={props.secureTextEntry || false} placeholderTextColor={props.textcolor} color={props.textcolor} />
    </View>
  )
}
export default Input;
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    height: 50,
    width: width - 50,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  }
})