import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import Message from "./Message";

const DATA = Array(30)
  .fill(null)
  .map((e) => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    message: faker.lorem.sentence(),
    news: faker.number.int() % 5,
    online: faker.datatype.boolean(),
  }));

const messageList = () => {
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <View style={{ width: "90%", padding: 10 }}>
      <FlatList
        data={DATA}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Message
            name={item.name}
            avatar={item.avatar}
            message={item.message}
            news={item.news}
            online={item.online}
          />
        )}
      />
    </View>
  );
};

export default messageList;

const styles = StyleSheet.create({});
