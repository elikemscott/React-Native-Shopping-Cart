import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function CheckOutScreen() {
  return (
    <View>
      <View style={styles.icons}>
        <View style={styles.arrowBackground}>
          <Ionicons
            style={styles.arrow}
            name="ios-arrow-round-back"
            size={30}
            color="black"
          />
        </View>
        <View style={styles.cartBackground}>
          <EvilIcons
            style={styles.cart}
            name="cart"
            size={24}
            color="#1252b3"
          />
        </View>
        <View>
          <EvilIcons
            style={styles.like}
            name="heart"
            size={24}
            color="#1252b3"
          />
        </View>
        <Image style={styles.image} source={require("../assets/red.jpg")} />
      </View>

      <View style={styles.main}>
        <View>
          <Text style={styles.header}>Red Woman Jacket</Text>
          <Text style={styles.review}>
            Review:{" "}
            <Rating
              type="star"
              startingValue={4}
              ratingCount={5}
              imageSize={15}
            />{" "}
          </Text>
        </View>

        <View style={styles.line}></View>

        <View>
          <Text>
            Ut mei veri exerci graece, clita quidam eum ad. Iusto choro
            inciderint ei quo, cu graeci accusata ius, te est nobis legere. Eu
            pri sale nihil mediocritatem.{" "}
          </Text>
        </View>

        <View style={styles.material}>
          <Text style={styles.materialText}>
            Material: 91% polyyester, 9% elastane
          </Text>
        </View>
        <View style={styles.sizes}>
          <View style={styles.extraLarge}>
            <Text>XS</Text>
          </View>
          <View style={styles.extraLarge}>
            <Text>S</Text>
          </View>
          <View style={styles.medium}>
            <Text>M</Text>
          </View>
          <View style={styles.extraLarge}>
            <Text>L</Text>
          </View>
          <View style={styles.extraLarge}>
            <Text>XL</Text>
          </View>
        </View>

        <View style={styles.total}>
          <Text style={styles.amount}>Total Amount</Text>
          <Text style={styles.price}>$110</Text>
          <View style={styles.add}>
            <Text>Add to cart</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  arrow: {
    position: "relative",
    left: 30,
    top: 45,
  },

  cart: {
    position: "relative",
    left: 340,
    top: 20,
  },

  like: {
    position: "relative",
    left: 342,
    top: 30,
  },
  cartBackground: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },

  arrowBackground: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },

  image: {
    height: 320,
    width: 320,
    marginHorizontal: 25,
  },

  main: {
    marginHorizontal: 30,
  },

  review: {
    fontSize: 17,
    marginVertical: 20,
  },

  header: {
    fontSize: 25,
    marginTop: 20,
  },

  line: {
    height: 5,
    width: 70,
    backgroundColor: "#1252b3",
    borderRadius: 50,
    marginBottom: 20,
  },

  material: {
    marginVertical: 20,
    height: 40,
    width: 300,
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 30,
    position: "relative",
    right: 25,
  },
  materialText: {
    color: "#1252b3",
  },

  sizes: {
    flexDirection: "row",
  },
  extraLarge: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  medium: {
    height: 40,
    width: 40,
    backgroundColor: "#1252b3",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
  },

  total: {
    height: 70,
    width: 300,
    backgroundColor: "#0466c8",
    marginVertical: 35,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  amount: {
    color: "white",
    position: "relative",
    top: 13,
  },

  price: {
    color: "white",
    position: "relative",
    top: 15,
  },

  add: {
    position: "relative",
    left: 200,
    top: -15,
    backgroundColor: "#1252b3",
    width: 80,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
