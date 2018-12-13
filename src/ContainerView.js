import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import gembul from './gembul.png'

export default ({
  UsernameElement,
  PasswordElement,
  LoginButtonElement,
  NeedHelpButtonElement,
  RegisterButtonElement,
}) => (
  <View style={styles.container}>
    <View style={{ flex: 1, marginBottom: 40 }}>
      <Image
        resizeMode="contain"
        style={{ height: '100%', width: '100%' }}
        source={gembul}
      />
    </View>
    {UsernameElement}
    {PasswordElement}

    {LoginButtonElement}
    {NeedHelpButtonElement}
    <Text style={{ alignSelf: 'center', color: '#A6A8A9', fontSize: 15 }}>
      Don’t have an account yet ?
    </Text>
    {RegisterButtonElement}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 18,
  },
})
