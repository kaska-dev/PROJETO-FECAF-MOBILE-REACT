import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { stylesLogout } from "./stylesLogout";

export default function ButtonLogout() {
  async function handleLogout() {
    try {
      await AsyncStorage.clear();
      router.replace("/(auth)/login");
    } catch (err) {
      console.log("Erro ao fazer logout:", err);
    }
  }
  return (
    <TouchableOpacity style={stylesLogout.button} onPress={handleLogout}>
      <Text style={stylesLogout.text}>Sair da Conta</Text>
    </TouchableOpacity>
  );
}
