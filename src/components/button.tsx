import React, { FC, PropsWithChildren } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from "react-native";
interface Props {
  onPress: () => void;
  title: string;
  width: number;
  height: number;
  color: string;
}


const Button: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles(props).container} onPress={props.onPress || false}>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = (prof: PropsWithChildren<Props>) => StyleSheet.create({
  container: {
    width: prof.width,
    height: prof.height,
    backgroundColor: prof.color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
})
