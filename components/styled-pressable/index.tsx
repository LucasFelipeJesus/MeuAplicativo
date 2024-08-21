import { Pressable, StyleSheet, Text, View } from 'react-native';

interface StyledPressableProps {
    text: string
    color?: string
    onpress: () => void
}

export default function StyledPressable({ text, color, onpress }: StyledPressableProps) {
    return (
        <Pressable
            onPress={onpress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? "gray" : color || "blue"
                },
                styles.pressable,
            ]}
        >
            <Text style={styles.pressableText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        width: "80%",
        height: 40,
        margin: 10,
        padding: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    pressableText: {
        fontSize: 18,
        color: "white"
    }
})