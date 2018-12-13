import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'
import gembul from './gembul.png'

export default class Login extends Component {
  state = {
    logging: false,
  }
  // This is for demo only, normally you want to create an api wrapper
  callLoginAPI = async () => {
    this.setState({ logging: true })
    await new Promise(resolve => {
      setTimeout(resolve, 2000)
    })
    alert('SIGN IN success')
    this.setState({ logging: false })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, marginBottom: 40 }}>
          <Image
            resizeMode="contain"
            style={{ height: '100%', width: '100%' }}
            source={gembul}
          />
        </View>
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput
          placeholder="Password"
          style={[styles.textInput, { marginVertical: 20 }]}
        />

        <TouchableOpacity
          onPress={this.callLoginAPI}
          disabled={this.state.logging}
          style={[
            styles.button,
            !!this.state.logging && { backgroundColor: 'grey' },
          ]}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("Sorry can't help you")}
          style={{
            alignSelf: 'flex-end',
            height: 40,
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Text style={{ color: '#BDC3C6', fontSize: 15 }}>Need Help?</Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', color: '#A6A8A9', fontSize: 15 }}>
          Don’t have an account yet ?
        </Text>
        <TouchableOpacity
          onPress={() => alert('Just login with any Username and Password')}
          style={{ alignSelf: 'center', height: 34, justifyContent: 'center' }}
        >
          <Text style={{ color: '#0D92CA', fontSize: 15 }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 18,
  },
  textInput: {
    height: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ECF0F3',
    paddingHorizontal: 19,
  },
  button: {
    height: 60,
    borderRadius: 3,
    backgroundColor: '#11B8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
