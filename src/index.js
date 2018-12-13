import React, { Component } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import ContainerView from './ContainerView'
import LoginButtonView from './LoginButtonView'
import NeedHelpButtonView from './NeedHelpButtonView'
import RegisterButtonView from './RegisterButtonView'
import usernameTextInputProps from './usernameTextInputProps'
import passwordTextInputProps from './passwordTextInputProps'

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
      <ContainerView
        UsernameElement={<TextInput {...usernameTextInputProps} />}
        PasswordElement={<TextInput {...passwordTextInputProps} />}
        LoginButtonElement={
          <TouchableOpacity
            onPress={this.callLoginAPI}
            disabled={this.state.logging}
          >
            <LoginButtonView disabled={this.state.logging} />
          </TouchableOpacity>
        }
        NeedHelpButtonElement={
          <TouchableOpacity onPress={() => alert("Sorry can't help you")}>
            <NeedHelpButtonView />
          </TouchableOpacity>
        }
        RegisterButtonElement={
          <TouchableOpacity
            onPress={() => alert('Just login with any Username and Password')}
          >
            <RegisterButtonView />
          </TouchableOpacity>
        }
      />
    )
  }
}
