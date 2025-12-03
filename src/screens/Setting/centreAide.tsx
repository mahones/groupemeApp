import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Style from "../../global/style";
import { LOREMIPSUM } from "../../utils/loremIpsum";
export default function CentreAide() {
    return (
        
        <View style={Style.container}>
            <Text style={style.textaligne}>{LOREMIPSUM}</Text>
        </View>
        
    )
};
const style = StyleSheet.create({
    textaligne:{
        textAlign: 'justify',
        lineHeight: 25,
    },
})