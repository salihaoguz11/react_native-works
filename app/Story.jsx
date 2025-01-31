import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Story = ({ image, name, seen }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={[styles.image, seen ? styles.seen : styles.notseen]}
      />
      <Text style={styles.storyText}>{name.substring(0, 8)}</Text>
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
  storyText: {
    fontWeight: "bold",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
  },
  seen: {
    borderColor: "gray",
    borderStyle: "solid",
  },
  notseen: {
    borderColor: "blue",
    borderStyle: "dashed",
  },
});
