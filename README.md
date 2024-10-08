Tarefa 1

Ajuste o projeto para adicionar uma imagem de logo a tela de login (pesquise sobre o componente Image do react native)
Na tela seguinte (primeira página após o Login) realize alguma estilização básica para apresentar um conteúdo similar ao print apresentado abaixo:

Requisitos para o desenvolvimento do projeto:

Node.js
Expo CLI
Caso deseje testar o aplicativo em um dispositivo físico, será necessário instalar o aplicativo Expo Go. Outra opção é utilizar um emulador, como o Android Studio ou o Xcode.

Etapa 1 - Configuração do ambiente
Para o desenvolvimento do projeto precisamos ter o Node.js instalado em nossa máquina. Para isso, acesse o site oficial do Node.js e faça o download da versão LTS.

Após a instalação do Node.js, abra o terminal e execute o comando abaixo para criar um novo projeto com o Expo utilizando TypeScript:

npx create-expo-app@latest --template expo-template-blank-typescript
O Expo é uma ferramenta que facilita o desenvolvimento de aplicativos React Native. Com ele, é possível criar um novo projeto, executar o aplicativo em um emulador ou dispositivo físico, entre outras funcionalidades.

Podemos nomear nosso projeto como my-app como sugerido ou escolher outro nome de nossa preferência.

Para testar o projeto só precisamos entrar na pasta e executar o comando npx expo start.

Etapa 2 - Estrutura do projeto
A estrutura do projeto é composta por diversos arquivos e pastas, mas as principais são:

App.tsx: Arquivo principal do aplicativo, onde é renderizado o componente raiz.
assets: Pasta onde são armazenados os arquivos de imagem, fontes, entre outros.
No React Native não temos acesso a todos os elementos HTML, como no React. Por isso, utilizamos componentes específicos para criar a interface do aplicativo.

Podemos criar uma nova pasta chamada components para armazenar os componentes que serão utilizados em nosso aplicativo. Em seguinda, criamos um novo componente chamado Button:

import React from 'react' // Importa o React
import { TouchableOpacity, Text, StyleSheet } from 'react-native' // Importa os componentes necessários

interface ButtonProps { // Define as propriedades do componente
  title: string
  onPress: () => void
}

export function Button({ title, onPress }: ButtonProps) { // Cria o componente Button
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ // Estiliza o componente
  button: {
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: 'white'
  }
})
Podemos utilizar o componente Button em nosso aplicativo da seguinte forma:

import React from 'react'
import { View, Text } from 'react-native'
import { Button } from './components/button'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meu primeiro app!</Text>
      <Button title="Aperte aqui" onPress={() => alert('Olá!')} />
    </View>
  )
}
Etapa 3 - Adotando o Gluestack UI
O Gluestack UI é uma biblioteca de componentes React Native que facilita a criação de interfaces de usuário. Para criar um projeto com o Gluestack UI junto do Expo e do Expo Router V3, execute o comando abaixo:

npm create gluestack
Selecione a opção Expo + Gluestack UI + Expo Router V3 e siga as instruções para criar o projeto.

A estrutura de pastas e arquivos do projeto é semelhante ao projeto anterior, mas com a adição de novos componentes e agira a pasta app está utilizando o Expo Router V3.

No arquivo _layout.tsx podemos observar que o Gluestack foi adicionado ao redor da aplicação:

    <GluestackUIProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Slot />
      </ThemeProvider>
    </GluestackUIProvider>
Vamos simplicar as coisas e remover a pasta tabs que não será utilizada aqui no projeto (mas que pode ser estudada para entender como funciona a navegação por tabs do Expo Router V3).

No nosso arquivo index.tsx vamos simplificar tudo também e deixar apenas um Olá mundo por enquanto.

import {
  Box,
  ScrollView,
  Text,
} from "@gluestack-ui/themed";

export default function Home() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <Text>Olá mundo!</Text>
      </ScrollView>
    </Box>
  );
}
Etapa 4 - App para calcular Gasolina x Álcool
Vamos criar um aplicativo simples para calcular se é mais vantajoso abastecer com gasolina ou álcool. Para isso, criamos um novo componente chamado FuelCalculator:

import React, { useState } from "react";
import {
  VStack,
  Button,
  ButtonText,
  Input,
  InputField,
  Text,
} from "@gluestack-ui/themed";

export function FuelCalculator() {
  const [gasolinePrice, setGasolinePrice] = useState("");
  const [etanolPrice, setEtanolPrice] = useState("");
  const [result, setResult] = useState("");

  function calculate() {
    const gasPrice = parseFloat(gasolinePrice);
    const alcPrice = parseFloat(etanolPrice);

    if (gasPrice && alcPrice) {
      const result = alcPrice / gasPrice;

      if (result < 0.7) {
        setResult("Abasteça com etanol!");
      } else {
        setResult("Abasteça com gasolina!");
      }
    }
  }

  return (
    <VStack space="md" reversed={false}>
      <Text textAlign="center">Preço da gasolina</Text>
      <Input>
        <InputField
          value={gasolinePrice}
          onChangeText={setGasolinePrice}
          placeholder="R$ preço da gasolina"
          keyboardType="numeric"
        />
      </Input>

      <Text textAlign="center">Preço do etanol</Text>
      <Input variant="outline" size="md">
        <InputField
          value={etanolPrice}
          onChangeText={setEtanolPrice}
          placeholder="R$ preço do etanol"
          keyboardType="numeric"
        />
      </Input>

      <Button marginTop={5}>
        <ButtonText onPress={calculate}>Verificar</ButtonText>
      </Button>

      <Text textAlign="center" size="lg" fontWeight='bold'>{result}</Text>
    </VStack>
  );
}
Podemos utilizar o componente FuelCalculator em nosso aplicativo da seguinte forma:

import { Box, Text, VStack } from "@gluestack-ui/themed";
import { FuelCalculator } from "../components/fuel-calculator";

export default function Home() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <VStack space="md" reversed={false}>
        <Text size="lg" fontWeight='bold'>Calculadora de combustível</Text>
        <FuelCalculator />
      </VStack>
    </Box>
  );
}


