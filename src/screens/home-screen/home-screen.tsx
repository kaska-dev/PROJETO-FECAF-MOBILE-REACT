import { View, Text, StyleSheet, TextInput } from "react-native";

export const Home = () => {
  return (
    <View style={stylesText.container1}>
      <Text>Olá mundo</Text>
      <TextInput style={stylesInput.container2} />
    </View>
  );
};

const stylesText = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

const stylesInput = StyleSheet.create({
  container2: {
    height: 52,
    width: "90%",
    borderWidth: 1,
    borderColor: "#000",
  },
});
