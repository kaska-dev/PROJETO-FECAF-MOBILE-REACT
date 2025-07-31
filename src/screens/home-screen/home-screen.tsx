import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import LogoReactApp from '../../../src/assets/newLogo.png';
import { ButtonCustom } from "../../components/button-custom/button-custom";
import { styles } from "./styles";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <View style={styles.container}>
        <Image
            source={LogoReactApp}
            style={styles.styleImage}
            resizeMode='contain'
        />
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
