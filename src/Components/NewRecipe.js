import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const NewRecipe = (props) => {
    return (
        <>
            <TouchableOpacity style={{ backgroundColor: 'white', width: 250, height: 125, borderRadius: 15, marginTop: 40, ...styles.shadow, marginHorizontal: 10 }}>
                <Image source={props.mainImage} style={{ top: -40, left: 130, position: 'absolute' }} />
                <Text style={{ fontWeight: '800', fontSize: 20, margin: 10, width: 138, }}>{props.recipName}</Text>
                <View style={{ marginLeft: 9, flexDirection: 'row' }}>
                    <Ionicons size={16} name='star' color={'#FFAD30'} />
                    <Ionicons size={16} name='star' color={'#FFAD30'} />
                    <Ionicons size={16} name='star' color={'#FFAD30'} />
                    <Ionicons size={16} name='star' color={'#FFAD30'} />
                    <Ionicons size={16} name='star' color={'#FFAD30'} />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginLeft: 9, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={props.userPic} style={{ width: 25, height: 25, borderRadius: 50, marginRight: 5 }} resizeMode='contain' />
                        <Text>By {props.userName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons size={20} name='time-outline' color={'grey'} style={{ marginRight: 5 }} />
                        <Text>{props.time}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        </>
    )
}

export default NewRecipe

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})