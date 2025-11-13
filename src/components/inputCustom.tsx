import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLOR_PALETTE } from "../utils/utilitaires";

type InputCustomProps = {
    placeholder?: string;
    value?: string;
    onChangeText: (text: string) => void;
}
const InputCustom = ({ placeholder, value, onChangeText }: InputCustomProps) => {
    
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: COLOR_PALETTE.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
    },
});

export default InputCustom;