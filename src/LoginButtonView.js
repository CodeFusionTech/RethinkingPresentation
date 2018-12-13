import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ disabled }) => (
  <View style={[styles.button, !!disabled && { backgroundColor: 'grey' }]}>
    <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
      SIGN IN
    </Text>
  </View>
)

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 3,
    backgroundColor: '#11B8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
