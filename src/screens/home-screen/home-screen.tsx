import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ButtonCustom } from "../../components/button-custom/button-custom";
import { styles } from "./styles";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.titleInput}>E-mail</Text>
      <TextInput 
          style={styles.styleInput}
          onChangeText={setEmail}
          value={email}
      />
      <Text style={styles.titleInput}>Senha</Text>
      <TextInput 
          style={styles.styleInput}
          onChangeText={setPassword}
          value={password}
      />
      <ButtonCustom/>
    </View>
  );
};
