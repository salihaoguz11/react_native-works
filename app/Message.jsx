import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const message = ({ name, avatar, news, message, online }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: "#4732B1",
            }}
            source={{ uri: avatar }}
          />
          {online && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                position: "absolute",
                bottom: 12,
                right: 75,
                backgroundColor: "#1EC883",
              }}
            ></View>
          )}
        </View>
        <View style={{ flex: 3, justifyContent: "center", paddingLeft: 25 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
          <Text style={{ fontSize: 13, color: "gray" }}>{message}</Text>
        </View>
        <View style={{ flex: 1 }}>
          {news > 0 && (
            <View
              style={{
                backgroundColor: "#FF8484",
                width: 30,
                height: 30,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
              >
                {news}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "100%",
    heigth: 80,
    flexDirection: "row",
    margin: 2,
    padding: 2,
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
  },
});
