import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart, decreamentQuantity, increamentQuantity, removeFromCart } from "../redux/CartReducer";

const MenuComponent = ({ food }) => {
  const dispatch = useDispatch();
  const [addItem, setAddItem] = useState(0);
  const [selected, setSelected] = useState(false);
  return (
    <View>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodPrice}>{food.price}</Text>
          <Text style={styles.starContainer}>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                style={styles.startIcon}
                name={i < Math.floor(food.rating) ? "star" : "star-o"}
                size={20}
                color="#FFD700"
              />
            ))}
          </Text>
          <Text style={styles.description}>
            {food.description.length > 30
              ? food.description.substr(0, 35) + "..."
              : food.description}
          </Text>
        </View>
        <Pressable style={{ marginRight: 10 }}>
          <Image style={styles.image} source={{ uri: food.image }} />

          {selected ? (
            <Pressable style={styles.selectedTrue}>
              <Pressable
                onPress={() => {
                  if (addItem === 1) {
                    dispatch(removeFromCart(food));
                    setSelected(false);
                    setAddItem(0);
                  } else {
                    setAddItem((c) => c - 1);
                    dispatch(decreamentQuantity(food));
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  {addItem}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setAddItem((c) => c + 1);
                  dispatch(increamentQuantity(food));
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (addItem == 0) {
                  setAddItem((c) => c + 1);
                  dispatch(addToCart(food));
                }
              }}
              style={styles.addContainer}
            >
              <Text style={styles.addText}>ADD</Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodName: {
    fontSize: 18,
    fontWeight: "600",
  },
  foodPrice: {},
  starContainer: {
    marginTop: 4,
    borderRadius: 4,
  },
  startIcon: {
    paddingHorizontal: 3,
  },
  description: {
    width: 180,
    marginTop: 8,
    color: "gray",
    fontSize: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  addContainer: {
    position: "absolute",
    top: 90,
    left: 20,
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },
  addText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#018749",
  },
  selectedTrue: {
    position: "absolute",
    top: 90,
    left: 15,

    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },
});
