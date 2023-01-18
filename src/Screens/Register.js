import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import InputField from '../Components/InputField'
import { Checkbox } from 'native-base'
import Btn from '../Components/Btn'
import { TouchableOpacity } from 'react-native'

const Register = ({ navigation }) => {

    return (
        <>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <View style={{ marginLeft: 30, marginTop: 25 }}>
                    <Text style={{ fontSize: 28, fontWeight: '700', color: 'black', letterSpacing: 1 }}>Create an account,</Text>
                    <Text style={{ fontSize: 16, color: 'black', marginVertical: 5, width: 300 }}>Let’s help you set up your account, it won’t take long.</Text>
                </View>
                <View style={styles.inputForm}>
                    <View>
                        <InputField text='Name' placeHolder='Enter Name' />
                    </View>
                    <View>
                        <InputField text='Email' placeHolder='Enter Email' />
                    </View>
                    <View>
                        <InputField text='Password' placeHolder='Enter Password' />
                    </View>
                    <View>
                        <InputField text='Confirm Password' placeHolder='Retype Password' />
                    </View>
                </View>
                <View style={styles.Checkbox}>
                    <Checkbox shadow={5} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked>
                        <Text style={{ color: '#FF9C00' }}>
                            Accept terms & Condition
                        </Text>
                    </Checkbox>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Btn btnText={'Sign Up'} width={315} IconName={'arrow-forward-outline'} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, alignSelf: 'center' }}>
                    <Image style={{ height: 2, width: 100, opacity: 0.3 }} source={require('../assets/Images/substract.png')} />
                    <Text style={{ marginHorizontal: 5, color: 'black' }}>or Sign in with</Text>
                    <Image style={{ height: 2, width: 100, opacity: 0.3 }} source={require('../assets/Images/substract.png')} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/facebook.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, alignSelf: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 16 }}>Already a member?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={{ color: '#FF9C00', fontWeight: '500', fontSize: 16, marginLeft: 5 }}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    inputForm: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexGrow: 0.4
    },
    Checkbox: {
        marginLeft: 50,
        marginTop: 10
    },
    btn: {
        marginTop: 20
    }
})