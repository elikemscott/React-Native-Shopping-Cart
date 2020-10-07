import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Ionicons, EvilIcons, } from '@expo/vector-icons';
function Shop({ name, price, rating, type, image }) {
  return (
    <View style={styles.container}>
         
      <View style={styles.imageContainer}>
       
        <Image source={image} style={styles.images} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
       <Text> <Rating
  type='star'
  startingValue={rating}
  ratingCount={5}
  imageSize={17}
/></Text>
        <Text style={styles.details}>{type} </Text>
        <Text style={styles.details}> {price} </Text>
        
      </View>
    </View>
  );
}
export default Shop;

const styles = StyleSheet.create({
  container: {
     
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 40,
  },
  imageContainer: {
     
    height: 20,
    width: 120,
  },

  textContainer: {
    
    height: 90,
    width: 220,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 20,
  },
  images: {
    height: 140,
    width: 120,
    borderRadius: 10,
  },
  name: {
    marginHorizontal: 10,
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    marginHorizontal: 10,
    color: "#6a00f4",
    fontSize: 18,
    marginBottom: 3,
  },
});
