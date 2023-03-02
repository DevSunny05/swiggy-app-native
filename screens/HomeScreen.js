import {  Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../componenets/Carousel';
import FooodTypes from '../componenets/FooodTypes';
import QuickFood from '../componenets/QuickFood';
import { Octicons } from '@expo/vector-icons';
import hotels from '../data/hotels';
import MenuItem from '../componenets/MenuItem';

const HomeScreen = () => {
    const data=hotels
  return (
    <ScrollView style={{marginTop:40}}>
        {/* search bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder='Search for Restaurent item or more,'/>
        <AntDesign name="search1" size={24} color="#E52850" />
      </View>

        {/* Image slider */}
      <Carousel/>

      {/* food types components */}
      <FooodTypes/>

      {/* quick food component */}
      <QuickFood/>

      {/* filter button */}
      <View style={styles.bigContainer}>
        <Pressable style={styles.smallContainer}>
            <Text style={{marginRight:6}}>Filter</Text>
            <Octicons name="filter" size={20} color="black" />
        </Pressable>

        <Pressable style={styles.smallContainer}>
            <Text>Sort By rating</Text>
        </Pressable>

        <Pressable style={styles.smallContainer}>
            <Text>Sort By value</Text>
        </Pressable>
      </View>

        {
            data.map((item,index)=>(
                <MenuItem key={index} item={item}/>
            ))
        }

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        margin:10,
        padding:10,
        borderColor:'#C0C0C0',
        borderRadius:7
    },
    searchInput:{
        fontSize:17
    },
    bigContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    smallContainer:{
        flexDirection:'row',
        marginHorizontal:10,
        alignItems:'center',
        borderWidth:1,
        borderColor:'#D0D0D0',
        padding:10,
        borderRadius:20,
        justifyContent:'center',
        width:120
    }
})