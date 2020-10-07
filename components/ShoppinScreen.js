import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons, EvilIcons, } from '@expo/vector-icons';

export default function ShoppinScreen() {
    return (
        <View>
            <View style={styles.container}>
            
            <View style={styles.arrowBackground}>
            <Ionicons style={styles.arrow} name="ios-arrow-round-back" size={30} color="black" /> 
            </View>
            <View style={styles.cartBackground}>
            <EvilIcons style={styles.cart} name="cart" size={24} color="#6a00f4" />
            </View>
            
            </View>

            <View>
                <Text style={styles.header}> Woman Jacket</Text>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Search Jacket" /> 
                <Text style={styles.filter}>Filter</Text>
            </View>
            

        </View>

        
    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal:20,
      
    },

    arrow:{
        position: 'relative',
        left:5
    },

    cart:{
        position: 'relative',
        left: 300,
        top: -20,

        
    },
    cartBackground:{
        height: 30,
        width: 30,
        borderRadius:50,
        
        
        
    },

    arrowBackground:{
        height: 30,
        width: 30,
        borderRadius:50,
        backgroundColor: 'white',
         
    },

    header:{
        fontSize: 30,
        marginLeft:20
    },

    input:{
        backgroundColor: 'white',
        height: 40,
        width: 320,
        marginHorizontal: 20,
        marginTop:20,
        borderRadius: 10,
        paddingLeft:10,
        
    },

    filter:{
        color: '#6a00f4',
        fontSize: 17,
        position: 'relative',
        left: 280,
        top: -30
    }
  });
