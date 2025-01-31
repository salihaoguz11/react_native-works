import { router } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.indexContainer}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 10,
        }}
        onPress={() => router.push("/login")}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  indexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
