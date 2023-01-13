import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UserProfile from './UserProfile'
import InputField from '../Components/InputField'
import { TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input } from 'native-base'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import FilterBtn from '../Components/FilterBtn'
import RecipeCard from '../Components/RecipeCard'
import { recipeData } from '../Config/RecipeData'


const Home = (props) => {
    const [filterBtn, setFilterBtn] = useState(false)

    const handleChangeBtn = () => {
        setFilterBtn(!filterBtn)
    }
    return (
        <>
            <View>
                <View style={{ marginLeft: 30, marginTop: 15 }}>
                    <Text style={{ fontSize: 28, fontWeight: '700', color: 'black' }}>Hello User</Text>
                    <Text style={{ fontSize: 16, color: 'grey', marginVertical: 0, width: 300 }}>What are you cooking today?</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
                        <Input w={{
                            base: "70%",
                            md: "25%"
                        }} InputLeftElement={<Ionicons size={25} name='search' style={{ left: 8 }} />} placeholder="Name" />
                        <TouchableOpacity onPress={handleChangeBtn} style={{ width: 50, height: 50, backgroundColor: '#129575', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                            <Ionicons size={25} name='filter' color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    {filterBtn ? <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 15, marginBottom: 10 }}>
                        <FilterBtn />
                    </ScrollView> :
                        <View style={{ marginVertical: 12 }}>
                        </View>
                    }
                </View>
                <View>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    >
                        {
                            recipeData.map((item, key) => (
                                <View style={{ marginTop: 70, marginLeft: 15 }}>
                                    <RecipeCard name={item.recipeName} rating={item.rating} uri={item.uri} time={item.time} key={key} />
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
                <View>
                    <Text style={{ fontSize: 28, fontWeight: '700', color: 'black', marginLeft: 30, marginTop: 20 }}>New Recipes</Text>

                </View>
            </View >

        </>
    )
}

export default Home

const styles = StyleSheet.create({
    textInput: {

    }
})