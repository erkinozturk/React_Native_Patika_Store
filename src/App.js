import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import store_data from "./store_data.json";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const RENDER_PRODUCT = ({ item }) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.appTitle}>PATIKASTORE</Text>
        <TextInput style={styles.textInput} placeholder={"Ara..."} />
        <FlatList numColumns={2} data={store_data} renderItem={RENDER_PRODUCT} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1"
  },
  appTitle: {
    color: "#790079",
    fontWeight: "bold",
    fontSize: 30,
    margin: 5,
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5
  }
})

export default App;