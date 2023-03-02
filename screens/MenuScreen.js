import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const MenuScreen = () => {
    const navigation=useNavigation()
    const route=useRoute()
    const {id,name,rating,time,cuisines,adress}=route.params
  return (
    <SafeAreaView style={{marginTop:40}}>
      <View style={styles.blueBackground}>
        <View style={styles.upperContainer}>
            <Ionicons onPress={()=>navigation.goBack()} name="arrow-back" size={24} color="black" />
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={22} color="black" />
                <Text style={styles.searchText}>Search</Text>
            </View>
        </View>

        <View style={styles.whiteBackground}>
            <View style={styles.nameContainer}>
                <Text style={styles.text}>{name}</Text>
                <View style={styles.icons}>
                    <Entypo  style={styles.share} name="share" size={24} color="black" />
                    <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                </View>
            </View>

            <View style={styles.starContainer}>
                    <MaterialCommunityIcons name="star-circle" size={24} color="green" />
                    <Text style={styles.rating}>{rating}</Text>
                    <Text style={styles.dot}>.</Text>
                    <Text style={styles.time}>{time}mins</Text>
            </View>

            <Text style={styles.cuisines}>{cuisines}</Text>

            <View style={styles.adressContainer}>
                <Text>Outlet</Text>
                <Text style={styles.addressText}>{adress}</Text>
            </View>

            <View style={styles.adressContainer}>
                <Text>22 mins</Text>
                <Text  style={styles.addressText}>Home</Text>
            </View>

            <Text style={{borderColor:'gray',borderWidth:0.6,height:1,marginTop:10}}/>
            <View style={styles.deliveryContainer}>
                <FontAwesome name="bicycle" size={24} color="orange" />
                <Text style={styles.deliveryText}>0-3 Kms |</Text>
                <Text style={styles.deliveryText}>35 Delivery fee will apply</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
    blueBackground:{
        height:300,
        backgroundColor:'#B0C4DE',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40
    },
    upperContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:10
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    searchText:{
        fontSize:16,
        fontWeight:'600',
        marginLeft:7
    },
    whiteBackground:{
        backgroundColor:'white',
        height:210,
        marginHorizontal:20,
        marginVertical:5,
        padding:10,
        borderRadius:15

    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    icons:{
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold'
    },
    share:{
        marginHorizontal:7
    },
    starContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:7
        
    },
    rating:{
        marginLeft:3,
        fontSize:17,
        fontWeight:'400'
    },
    dot:{
        marginLeft:3,
        fontWeight:'900',
        fontSize:12
    },
    time:{
        marginLeft:3,
        fontSize:17,
        fontWeight:'400'
    },
    cuisines:{
        marginTop:8,
        color:'gray',
        fontSize:17
    },
    adressContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    addressText:{
        marginLeft:15,
        fontSize:15,
        fontWeight:'bold'
    },
    deliveryContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    deliveryText:{
        marginLeft:10,
        color:'gray',
        fontSize:16
    }

})