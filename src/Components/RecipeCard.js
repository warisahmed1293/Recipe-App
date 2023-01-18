import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const RecipeCard = (props) => {
    const [favourite, setFavourite] = useState(false)

    const handleChangeBookmark = () => {
        setFavourite(!favourite)
    }
    return (
        <>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: '#ffff',
                    width: 150,
                    height: 180,
                    borderRadius: 20,
                    alignItems: 'center',
                    ...styles.shadow
                }}>
                    <View style={{ position: 'absolute', top: -60 }}>
                        <Image source={props.uri} />
                    </View>
                    <View style={{ width: 50, height: 23, borderRadius: 20, backgroundColor: '#FFE1B3', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', left: 55, top: -25 }}>
                        <Ionicons size={15} name='star' color={'#FFAD30'} />
                        <Text style={{ fontWeight: '600', marginLeft: 2 }}>{props.rating}</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '800', width: 120, textAlign: 'center', marginBottom: 20, marginTop: 40 }}>
                        {props.name}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: 200 }}>
                        <View>
                            <Text style={{ fontSize: 16 }}>Time</Text>
                            <Text style={{ fontWeight: '800' }}>{props.time}</Text>
                        </View>
                        <TouchableOpacity onPress={handleChangeBookmark}>
                            {
                                favourite ?
                                    <Ionicons size={25} name='bookmark' color={'#129575'} /> :
                                    <Ionicons size={25} name='bookmark-outline' color={'#129575'} />
                            }
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>
            </View>
        </>
    )
}

export default RecipeCard

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