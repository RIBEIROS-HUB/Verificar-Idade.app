import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { styles } from "./css/styles.js";

const App = () => {
  const [idade, setIdade] = useState("");
  const [resultado, setResultado] = useState("");

  const verificarIdade = () => {
    const idadeNum = parseInt(idade);

    if (isNaN(idadeNum) || idadeNum < 0) {
      setResultado("Digite uma idade válida!");
    } else if (idadeNum < 18) {
      setResultado("Você é menor de idade.");
    } else {
      setResultado("Você é maior de idade.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />
      <Button title="Verificar" onPress={verificarIdade} />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

export default App;
