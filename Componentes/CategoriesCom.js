import React, { useState } from "react";
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from "react-native";
import DataCategory from "../categories";


export default function Categories( {onChange} ) {

    const [activate, setActivate] = useState()

    function handlePress(id) {
        setActivate(id)
        onChange(id)
    }


    return (
        <View style={{width: '100%'}}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={DataCategory}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            <View>
                <TouchableOpacity onPress={() => handlePress(item.id)}>
                    <Text style={[activate === item.id && {color: '#1f2736', fontWeight: '900'}, styles.category]}>{item.category}</Text>
                </TouchableOpacity>
            </View>
        }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        backgroundColor: '#c3c6ce',
        marginLeft: 5,
        padding: 5,
        borderRadius: 10
    }
})