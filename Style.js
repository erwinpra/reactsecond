import React, { Component } from 'react';
import { 
    Text,
    View,
} from 'react-native';

import Stylex from "./style/styleComponent";

export default class Style extends Component{
    render() {
        return(
            <View style={ Stylex.container }>
                <Text style={ Stylex.textRed }>RN Style</Text>
            </View>
        )
    }
}

// STYLE
// const styles = StyleSheet.create({

//     container : {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     textRed : {
//         color: "red",
//         fontSize: 40
//     }

// })