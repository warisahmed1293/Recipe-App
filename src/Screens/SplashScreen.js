import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Btn from '../Components/Btn';


const SplashScreen = ({ navigation }) => {
    return (
        <>
            <Image source={require('../assets/Images/splashScreenBG.png')} style={styles.bgImage} />
            <View style={styles.mainView}>
                <View style={styles.logoView}>
                    <Image source={require('../assets/Images/logoApp.png')} />
                </View>
                <View>
                    <View style={styles.textView} >
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: '600' }}>Get</Text>
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: '800', marginBottom: 25 }}>Cooking</Text>
                        <Text style={{ color: 'white', fontSize: 16, }}>Simple way to find Tasty Recipe</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Btn width={250} btnText={'Start Cooking'} IconName={'arrow-forward-outline'} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textView: {
        alignItems: 'center',
        marginBottom: 45

    }
})