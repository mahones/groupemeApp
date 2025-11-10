import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {  PADDING_STANDARD, BORDER_RADIUS_STANDARD } from "../utils/utilitaires";

interface IconButtonProps {
    title?: string;
    icon: string;
    iconSize?: number;
    onPress: () => void;
    textColor: string;
    backgroundColor: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
    title,
    icon,
    iconSize,
    onPress,
    textColor,
    backgroundColor,
    style,
    textStyle,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }, style]}>
            {iconSize ? <Icon name={icon} size={iconSize} color={textColor} /> : <Icon name={icon} size={25} color={textColor} />}
            {title && <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        padding: PADDING_STANDARD.small,
        borderRadius: BORDER_RADIUS_STANDARD.large,
    },
    text: {
        marginLeft: PADDING_STANDARD.small,
    },
});

export default IconButton;
