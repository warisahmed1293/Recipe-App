import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavouriteRecipe = (props) => {
    const [favourite, setFavourite] = useState(false)

    const handleChangeBookmark = () => {
        setFavourite(!favourite)
    }
    return (
        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 70 }}>
            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                <Image source={props.uri2} style={{ position: 'absolute', }} />
                <View>
                    <View style={{ width: 50, height: 23, borderRadius: 20, backgroundColor: '#FFE1B3', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', top: 10, left: 120 }}>
                        <Ionicons size={15} name='star' color={'#FFAD30'} />
                        <Text style={{ fontWeight: '600', marginLeft: 2 }}>{props.rating}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: 50, alignSelf: 'center' }}>
                    <View style={{ left: -18 }}>
                        <Text style={{ fontSize: 20, fontWeight: '800', width: 175, color: 'white' }}>{props.recipeName}</Text>
                        <Text style={{ fontSize: 14, color: 'white' }}>By {props.chefName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', right: -18 }}>
                        <View>
                            <Text style={{ fontSize: 14, color: 'white', marginRight: 10 }}>{props.time}</Text>
                        </View>
                        <TouchableOpacity onPress={handleChangeBookmark}>
                            {
                                favourite ?
                                    <Ionicons size={25} name='bookmark' color={'#129575'} /> :
                                    <Ionicons size={25} name='bookmark-outline' color={'white'} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FavouriteRecipe

const styles = StyleSheet.create({})