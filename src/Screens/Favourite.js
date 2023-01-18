import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavouriteRecipe from '../Components/FavouriteRecipe'
import { recipeData } from '../Config/RecipeData'

const Favourite = () => {
    return (
        <>
            <View style={{ alignItems: 'center', paddingTop: 20, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 28, fontWeight: '700', color: 'black' }}>Saved recipes</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                >
                    {
                        recipeData.map((item, key) => (
                            <View style={{ marginHorizontal: 60 }}>
                                <FavouriteRecipe uri2={item.uri2} recipeName={item.recipeName} time={item.time} rating={item.rating} chefName={item.chefName} />
                            </View>
                        ))
                    }

                </ScrollView>
            </View>
        </>
    )
}

export default Favourite

const styles = StyleSheet.create({})