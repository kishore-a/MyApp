import { View, Text, StyleSheet } from 'react-native';
import { FC } from 'react'
import React from 'react'
const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        Dashboard
      </Text>
    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})