import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Story = ({ image, name, seen }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.storyText}>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
  },
  story: {
    backgroundColor: "yellow",
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: "center",
  },
  storyText: {},
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
});
