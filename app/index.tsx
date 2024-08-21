import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import StyledInput from "../components/styled-input";
import StyledPressable from "../components/styled-pressable";
import { router } from "expo-router";
import React from "react";

export default function Login() {

    const handleLogin = () => {
        router.replace('home');
    }

    const defaultColor = "#4ab2d2";

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logobbqLJ.jpg")} />
            <Text style={[{ color: defaultColor || 'blue' }, styles.title]}>Login</Text>
            <StyledInput placeholder="Digite seu login" onChangeText={(text) => console.log(text)} color={defaultColor} />
            <StyledInput placeholder="Digite seu senha" onChangeText={(text) => console.log(text)} color={defaultColor} />
            <StyledPressable text="Entrar" onpress={handleLogin} color={defaultColor} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
    },
    logo: {
        width: 280,
        height: 250,
        margin: 10,
    }
});
