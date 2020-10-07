import React from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import Shop from "../components/Shop";
import { Rating, AirbnbRating } from "react-native-ratings";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

function ShopScreen() {
  const shopItems = [
    {
      name: "Bike Jacket Softshell Warm",
      price: "$99",
      rating: 4,
      id: "1",
      image: require("../assets/green-jacket.jpg"),
    },
    {
      name: "Pink Hoody Merino",
      price: "$80",
      rating: 3,
      id: "2",
      image: require("../assets/jacket.jpg"),
    },
    {
      name: "Hooded Jackect Classic",
      price: "$140",
      rating: 5,
      id: "3",
      image: require("../assets/hooded-jacket.jpg"),
    },
    {
      name: "Red Woman Jacket",
      price: "$115",
      rating: 4.5,
      id: "4",
      image: require("../assets/red.jpg"),
    },
  ];

  return (
    <FlatList
      data={shopItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View>
            <Shop
              name={item.name}
              rating={item.rating}
              age={item.price}
              image={item.image}
            />
          </View>
        );
      }}
    />
  );
}

export default ShopScreen;
