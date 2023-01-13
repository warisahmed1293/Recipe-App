import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputField = (props) => {
    return (
        <>
            <Text style={{ fontSize: 16, fontWeight: '400', marginBottom: 5, color: 'black' }}>{props.text}</Text>
            <TextInput style={styles.inputField} placeholder={props.placeHolder} />
        </>
    )
}
export default InputField

const styles = StyleSheet.create({
    inputField: {
        width: 315,
        height: 55,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#D9D9D9'
    }
})