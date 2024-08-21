import { Button } from "react-native";

interface StyledButtonProps {
    text: string
    onclick: () => void
    color?: string
}

export default function StyledButton({ text, onclick, color }: StyledButtonProps) {
    return (
        <Button
            title={text}
            onPress={onclick}
            color={color}
        />
    )
}

