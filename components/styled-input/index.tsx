import { TextInput, StyleSheet } from "react-native";

interface StyledInputProps {
    placeholder: string
    color?: string
    onChangeText: (text: string) => void
}

export default function StyledInput({ placeholder, color, onChangeText }: StyledInputProps) {
    return (
        <TextInput
            style={[
                {
                    borderColor: color || "blue"
                },
                styles.input
            ]}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        height: 40,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    }
})

