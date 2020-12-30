import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewss extends React.Component {
    static navigationOptions = {
        header: false
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.titleBar}>
                </View>
                <WebView source={{ uri: 'https://www.amazon.in/' }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    titleBar: {
        backgroundColor: '#fff', justifyContent: 'space-between', flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        height: '4%'
    }
})