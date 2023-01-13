import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from './src/Config/Navigation';
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})