import { router } from 'expo-router';
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import LogoReactApp from '../../../src/assets/newLogo.png';
import { ButtonCustom } from "../../components/button-custom/button-custom";
import { styles } from "./styles";

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: '', password: '' })

  // Validação dos campos de Login
  const validate = () => {
    let isValid = true
    const errors = { email: '', password: '' };

    if (!email) {
      errors.email = "É obrigatório preencher o email."
      isValid = false;
    }
    if (!password) {
      errors.password = "É obrigatório preencher a senha."
      isValid = false;
    }
    setErrors(errors)
    return isValid;
  };

  //Se o campo tiver preenchido, vai ser efetuado o Login e entrar na página.
  const handleSubmit = () => {
    if (validate()) {
      console.log("O login foi feito!", { email, password })
      router.navigate('/first-page')
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={LogoReactApp}
          style={styles.styleImage}
          resizeMode='contain'
        />
        <Text style={styles.titleInput}>E-mail</Text>
        <TextInput
          style={styles.styleInput}
          value={email}
          onChangeText={setEmail}
        />
        {/* Se o campo email estiver vazio, aparecerá uma mensagem em vermelho */}
        {errors.email ? (
          <Text style={{ color: 'red' }}>{errors.email}</Text>
        ) : null}

        <Text style={styles.titleInput}>Senha</Text>
        <TextInput
          style={styles.styleInput}
          onChangeText={setPassword}
          value={password}
        />
        {/* Se o campo email estiver vazio, aparecerá uma mensagem em vermelho */}
        {errors.password ? (
          <Text style={{ color: 'red' }}>{errors.password}</Text>
        ) : null}

        <ButtonCustom onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};
