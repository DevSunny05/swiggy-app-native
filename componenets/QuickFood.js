import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import quickFood from '../data/quickFood'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const QuickFood = () => {
    const data=quickFood
  return (
    <View style={{margin:10}}>
      <Text style={styles.heading}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item,index)=>(
            <Pressable style={styles.container} key={index}>
                <ImageBackground imageStyle={{borderRadius:6}} style={styles.image} source={{uri:item.image}}>
                    <Text style={styles.offer}>{item.offer} OFF</Text>
                </ImageBackground>
                <Text style={styles.name}>{item.name}</Text>

                <View style={styles.starContainer}>
                    <MaterialCommunityIcons name="star-circle" size={24} color="green" />
                    <Text style={styles.rating}>{item.rating}</Text>
                    <Text style={styles.dot}>.</Text>
                    <Text style={styles.time}>{item.time}mins</Text>
                </View>
            </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({
    container:{
        margin:5
    },
    heading:{
        fontSize:16,
        fontWeight:'500'
    },
    image:{
        aspectRatio:5/6,
        height:170,
        
    },
    offer:{
        position:'absolute',
        bottom:10,
        left:10,
        fontSize:28,
        fontWeight:'900',
        color:'white',
       
        
    },
    name:{
        marginTop:10,
        fontSize:16,
        fontWeight:'500'
    },
    starContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:3
        
    },
    rating:{
        marginLeft:3,
        fontSize:15,
        fontWeight:'400'
    },
    dot:{
        marginLeft:3,
        fontWeight:'900',
        fontSize:12
    },
    time:{
        marginLeft:3,
        fontSize:15,
        fontWeight:'400'
    }
})