import {  ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const MenuItem = ({item}) => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>navigation.navigate('Menu',{
        id:item.id,
        name:item.name,
        image:item.image,
        adress:item.adress,
        rating:item.rating,
        time:item.time,
        cost_for_two:item.cost_for_two,
        cuisines:item.cuisines,
        menu:item.menu
      })} style={{flexDirection:'row',}}>
        <View style={styles.imageContainer}>
            <ImageBackground imageStyle={{borderRadius:6}} style={styles.image} source={{uri:item.image}}>
                <AntDesign style={styles.heartIcon} name="hearto" size={24} color="white" />
            </ImageBackground>
        </View>

        <View style={styles.dataContainer}>
            <Text style={styles.dataText}>{item.name}</Text>

            <View style={styles.starContainer}>
                <MaterialCommunityIcons name="star-circle" size={24} color="green" />
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.dot}>.</Text>
                <Text style={styles.time}>{item.time}mins</Text>
            </View>

            <Text style={styles.address}>{item.adress}</Text>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                <View style={styles.rupeeContainer}>
                    <Text style={styles.rupeeText}>₹</Text>
                </View>
                <Text style={styles.cost}>{item.cost_for_two} for-two</Text>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <MaterialCommunityIcons style={styles.delivryIcon} name="bike-fast" size={24} color="black" />
                <Text style={styles.deliveryText}>FREE DELIVERY</Text>
            </View>
        </View>

      </Pressable>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    image:{
        aspectRatio:4/5,
        height:150,
        borderRadius:8
    },
    heartIcon:{
        position:'absolute',
        right:10,
        top:10,
        fontWeight:'900'
    },
    dataContainer:{
        marginLeft:10
    },
    dataText:{
        fontSize:16,
        fontWeight:'bold'
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
    },
    address:{
        fontSize:15,
        color:'gray',
        marginTop:6
    },
    rupeeContainer:{
        backgroundColor:'#FF86C1',
        width:22,
        height:22,
        borderRadius:11,
        alignItems:'center',
        justifyContent:'center'
    },
    rupeeText:{
        textAlign:'center',
        fontSize:13,
        fontWeight:'bold',
        color:'white'
    },
    cost:{
        marginTop:5,
        marginLeft:4,
        fontSize:16,
        fontWeight:'500'
    },
    deliveryText:{
        marginLeft:6,
        fontSize:14
    },
    delivryIcon:{
        fontWeight:'bold'
    }
})