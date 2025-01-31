import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const DATA = Array(20)
  .fill(null)
  .map((e) => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    name: faker.internet.username(),
    seen: faker.datatype.boolean(),
  }));

const StoryList = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Story name={item.name} image={item.avatar} seen={item.seen} />
        )}
      />
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({});
