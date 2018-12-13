import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ECF0F3',
    paddingHorizontal: 19,
  },
})

export default {
  placeholder: 'Password',
  style: [styles.textInput, { marginVertical: 20 }],
}
