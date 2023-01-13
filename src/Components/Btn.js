import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Btn = (props) => {
    return (
        <View style={[styles.btn, { width: props.width }]}>
            <Text style={styles.Text}>
                {props.btnText}
            </Text>
            <Ionicons name={props.IconName} size={16} color='white' style={styles.icon} />
        </View>
    )
}

export default Btn

const styles = StyleSheet.create({
    btn: {
        height: 55,
        borderRadius: 10,
        backgroundColor: '#129575',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    Text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
        alignItems: 'center'
    },
    icon: {
        margin: 5

    }
})