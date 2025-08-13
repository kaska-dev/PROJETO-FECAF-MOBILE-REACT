import { MaterialIcons as Icon } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ButtonCustom } from "../../components/button-custom/button-custom";
import { styles } from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: '', password: '' })


  // Validação dos campos de Login
  const validate = () => {
    let isValid = true
    const errors = { email: '', password: '' };

    if (!email) {
      errors.email = "Campo Obrigatório"
      isValid = false;
    }
    if (!password) {
      errors.password = "Campo Obrigatório"
      isValid = false;
    }
    setErrors(errors)
    return isValid;
  };

  //Se o campo tiver preenchido, vai ser efetuado o Login e entrar na página.
  const handleSubmit = () => {
    if (validate()) {
      console.log("O login foi feito!", { email, password })
      router.replace('/products/home');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.divUp}>
        <Text style={styles.styleTitle}>Bem-vindo de volta!</Text>
        <Text style={styles.styleParagraf}>Insira seus dados para entrar na sua conta.</Text>
        <View style={styles.styleGroup}>
          <Text style={styles.titleInput}>Username</Text>
          <TextInput
            style={[styles.styleInput, errors.email && { borderColor: "red", borderWidth: 3 }]}
            value={email}
            onChangeText={setEmail}
          />
          {/* Se o campo email estiver vazio, aparecerá uma mensagem em vermelho */}
          {errors.email ? (
            <Text style={styles.errorLine}>
              <Icon name="error-outline" style={styles.iconError} />
              {errors.email}
            </Text>
          ) : null}

          <Text style={styles.titleInput}>Senha</Text>
          <TextInput
            style={[styles.styleInput, errors.password && { borderColor: "red", borderWidth: 3 }]}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />

          {/* Se o campo email estiver vazio, aparecerá uma mensagem em vermelho */}
          {errors.password ? (
            <Text style={styles.errorLine}>
              <Icon name="error-outline" style={styles.iconError} />
              {errors.password} </Text>
          ) : null}
          <ButtonCustom onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};
