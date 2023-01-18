import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputField from '../Components/InputField'
import Btn from '../Components/Btn'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Login = ({ navigation }) => {
    return (
        <>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <View style={{ marginLeft: 30, marginTop: 50 }}>
                    <Text style={{ fontSize: 35, fontWeight: '800', color: 'black', letterSpacing: 1 }}>Hello,</Text>
                    <Text style={{ fontSize: 25, color: 'black', fontWeight: '300', letterSpacing: 1 }}>Welcome Back!</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.inputForm}>
                        <View style={{ marginTop: 20 }}>
                            <InputField text='Email' placeHolder='Enter Email' />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <InputField text='Password' placeHolder='Enter Password' />
                        </View>
                        <TouchableOpacity style={{ margin: 10 }}>
                            <Text style={{ color: '#FF9C00' }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Tabs')}>
                        <Btn btnText={'Sign In'} width={315} IconName={'arrow-forward-outline'} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                        <Image style={{ height: 2, width: 100, opacity: 0.3 }} source={require('../assets/Images/substract.png')} />
                        <Text style={{ marginHorizontal: 5, color: 'black' }}>or Sign in with</Text>
                        <Image style={{ height: 2, width: 100, opacity: 0.3 }} source={require('../assets/Images/substract.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image source={require('../assets/icons/google.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/icons/facebook.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 45 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 16 }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={{ color: '#FF9C00', fontWeight: '500', fontSize: 16, marginLeft: 5 }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    inputForm: {
        flexDirection: 'column',
    }
})