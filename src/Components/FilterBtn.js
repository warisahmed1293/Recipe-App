import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const FilterBtn = () => {
    const [filterBtn, setFilterBtn] = useState(false)
    const [secFilterBtn, setSecFilterBtn] = useState(false)
    const [threeFilterBtn, setthreeFilterBtn] = useState(false)
    const [fourFilterBtn, setfourFilterBtn] = useState(false)
    const [fifeFilterBtn, setfifeFilterBtn] = useState(false)
    const [sixFilterBtn, setsixFilterBtn] = useState(false)

    const handleChange = () => {
        setFilterBtn(!filterBtn)
    }
    const secondhandleChange = () => {
        setSecFilterBtn(!secFilterBtn)
    }
    const thirdHandleChange = () => {
        setthreeFilterBtn(!threeFilterBtn)
    }
    const fourthHandleChange = () => {
        setfourFilterBtn(!fourFilterBtn)
    }
    const fifehandleChange = () => {
        setfifeFilterBtn(!fifeFilterBtn)
    }
    const sixhandleChange = () => {
        setsixFilterBtn(!sixFilterBtn)
    }
    return (
        <>

            <TouchableOpacity onPress={handleChange}>
                {filterBtn ? <View style={{ width: 60, height: 35, backgroundColor: '#129575', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }} >
                    <Text style={{ color: 'white' }}>All</Text>
                </View> : <View style={{ width: 60, height: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <Text style={{ color: '#129575', fontWeight: '800', }}>All</Text>
                </View>}
            </TouchableOpacity>
            <TouchableOpacity onPress={secondhandleChange}>
                {secFilterBtn ? <View style={{ width: 60, height: 35, backgroundColor: '#129575', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }} >
                    <Text style={{ color: 'white' }}>Chinese</Text>
                </View> : <View style={{ width: 60, height: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <Text style={{ color: '#129575', fontWeight: '800', }}>Chinese</Text>
                </View>}
            </TouchableOpacity>
            <TouchableOpacity onPress={thirdHandleChange}>
                {threeFilterBtn ? <View style={{ width: 60, height: 35, backgroundColor: '#129575', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }} >
                    <Text style={{ color: 'white', fontSize: 12, }}>Singaporean </Text>
                </View> : <View style={{ width: 60, height: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <Text style={{ color: '#129575', fontWeight: '800', fontSize: 12, }}>Singaporean</Text>
                </View>}
            </TouchableOpacity>
            <TouchableOpacity onPress={fourthHandleChange}>
                {fourFilterBtn ? <View style={{ width: 60, height: 35, backgroundColor: '#129575', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }} >
                    <Text style={{ color: 'white' }}>Indian</Text>
                </View> : <View style={{ width: 60, height: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <Text style={{ color: '#129575', fontWeight: '800', }}>Indian</Text>
                </View>}
            </TouchableOpacity>
            <TouchableOpacity onPress={fifehandleChange}>
                {fifeFilterBtn ? <View style={{ width: 60, height: 35, backgroundColor: '#129575', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }} >
                    <Text style={{ color: 'white' }}>Italian</Text>
                </View> : <View style={{ width: 60, height: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <Text style={{ color: '#129575', fontWeight: '800', }}>Italian</Text>
                </View>}
            </TouchableOpacity>
            <TouchableOpacity onPress={sixhandleChange}>
                {sixFilterBtn ? <View style={{ width: 60, height: 35, backgroundColor: '#129575', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }} >
                    <Text style={{ color: 'white' }}>Mexican</Text>
                </View> : <View style={{ width: 60, height: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}>
                    <Text style={{ color: '#129575', fontWeight: '800', }}>Mexican</Text>
                </View>}
            </TouchableOpacity>
        </>
    )
}

export default FilterBtn

const styles = StyleSheet.create({})