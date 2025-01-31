import { StyleSheet, Text, View, SectionList } from "react-native";
import React from "react";

const MENU = [
  {
    id: 1,
    title: "Soup",
    data: [
      {
        id: 1,
        title: "Lentil",
      },
      { id: 2, title: "Yogurt" },
      { id: 3, title: "Ezogeln" },
    ],
  },
  {
    id: 2,
    title: "Dessert",
    data: [
      {
        id: 1,
        title: "Baklava",
      },
      { id: 2, title: "Kunefe" },
      { id: 3, title: "Tiramisu" },
    ],
  },
  {
    id: 3,
    title: "Drink",
    data: [
      {
        id: 1,
        title: "Coke",
      },
      { id: 2, title: "Ayran" },
      {
        id: 3,
        title: "Water",
      },
    ],
  },
  {
    id: 4,
    title: "Main",
    data: [
      {
        id: 1,
        title: "Kebab",
        id: 2,
        title: "Lahmacun",
        id: 1,
        title: "Pizza",
        id: 1,
        title: "Doner",
      },
    ],
  },
];
const SectionListCom = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "red", width: "80%" }}>
        <SectionList
          sections={MENU}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item name={item.title} />}
          renderSectionHeader={({ section }) => <Title name={section.title} />}
        />
      </View>
    </View>
  );
};

export default SectionListCom;

const Title = ({ name }) => {
  return (
    <Text
      style={{
        fontSize: 30,
        fontWeigh: "bold",
        width: "90%",
        textAlign: "left",
      }}
    >
      {name}
    </Text>
  );
};

const Item = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "#E3E3E3",
        width: "90%",
        height: 70,
        borderRadius: 15,
        justifyContent: "center",
        paddingLeft: 10,
        margin: 3,
      }}
    >
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 65,
  },
});
