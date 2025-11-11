import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BORDER_RADIUS_STANDARD, COLOR_PALETTE, TEXT_STANDARD } from "../utils/utilitaires";

interface IconButtonLargeProps {
    icon: string;
    text: string;
    iconSize?: number;
    iconColor?: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const IconButtonLarge: React.FC<IconButtonLargeProps> = ({ icon, text, iconSize,iconColor, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Icon name={icon} size={iconSize} color={iconColor} />
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: BORDER_RADIUS_STANDARD.large,
        backgroundColor: COLOR_PALETTE.secondary ,
    },
    text: {
        fontSize: TEXT_STANDARD.big,
        
        marginLeft: 90,
        color: COLOR_PALETTE.white,
    },
})


export default IconButtonLarge;