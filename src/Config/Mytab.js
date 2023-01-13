import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Favourite from '../Screens/Favourite'
import Notification from '../Screens/Notification'
import UserProfile from '../Screens/UserProfile'
import Plus from '../Screens/Plus'
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'native-base';
import { TouchableHighlight } from 'react-native';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const CustomBtn = ({ onPress }) => (
        <TouchableOpacity
            style={{
                top: -30,
                width: 70,
                height: 70,
                borderRadius: 60,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#129575',
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <Ionicons name='add-outline' size={40} color='white' style={{ left: 1 }} />
        </TouchableOpacity>
    )

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                elevation: 0,
                backgroundColor: 'white',
                height: 80,
            }
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Ionicons name='home' size={25} color='#129575' /> : <Ionicons name='home-outline' size={25} color='grey' />}
                    </View>
                )
            }} />
            <Tab.Screen name="Favourite" component={Favourite} options={{

                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Ionicons name='bookmark' size={25} color='#129575' /> : <Ionicons name='bookmark-outline' size={25} color='grey' />}
                    </View>
                )
            }} />
            <Tab.Screen name="Plus" component={Plus} options={{
                tabBarButton: (props) => (
                    <CustomBtn {...props} />
                )
            }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Ionicons name='notifications' size={25} color='#129575' /> : <Ionicons name='notifications-outline' size={25} color='grey' />}
                    </View>
                )
            }} />
            <Tab.Screen name="UserProfile" component={UserProfile} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Ionicons name='person' size={25} color='#129575' /> : <Ionicons name='person-outline' size={25} color='grey' />}
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})