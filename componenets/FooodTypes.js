import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import foodType from '../data/foodType'

const FooodTypes = () => {
  return (
    <View>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodType.map((item,index)=>(
            <View style={styles.itemContainer} key={index}>
                <Image style={styles.itemImage} source={{uri:item.image}}/>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
        ))}
     </ScrollView>
    </View>
  )
}

export default FooodTypes

const styles = StyleSheet.create({
    itemContainer:{
        margin:10
    },
    itemImage:{
        width:60,
        height:60,
        borderRadius:30
    },
    itemText:{
        marginTop:6,
        textAlign:'center'
    }
})