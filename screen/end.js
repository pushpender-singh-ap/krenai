import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SliderBox } from "react-native-image-slider-box"
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons'

export default class Home extends Component {
    static navigationOptions = {
        header: false
    }
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://i.pinimg.com/originals/8c/42/3a/8c423a92ff696aea0f2f585062ca0d98.png",
                "https://i.pinimg.com/originals/a2/5a/51/a25a51df5c8341d396d8c667e4422948.png",
                "https://www.pngpix.com/wp-content/uploads/2016/02/Chair-PNG-image.png",
                "https://assets.stickpng.com/images/580b57fcd9996e24bc43c26c.png",
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={{ margin: 10, paddingTop: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Ionicons name="ios-arrow-round-back" size={40} color="gray" />
                        <MaterialCommunityIcons name="shopping" size={27} color="gray" />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SliderBox
                        images={this.state.images}
                        sliderBoxHeight={300}
                        onCurrentImagePressed={index =>
                            console.warn(`image ${index} pressed`)
                        }
                    >
                    </SliderBox>
                    <TouchableOpacity style={{ alignSelf: "flex-end", top: 5, right: 20 }}>
                        <Feather name="bookmark" size={25} color="black" />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 20, paddingRight: 20, paddingTop: 18, }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Autobe best chair</Text>
                            <Text style={{ fontSize: 15, color: "gray" }}>324.69 USD</Text>
                        </View>
                        <View style={{ flexDirection: "column" }} >
                            <Text style={{ fontSize: 10, color: 'gray', margin: 6 }}>Costumers Rating</Text>
                            <View style={{ flexDirection: "row", left: 5 }}>
                                <Ionicons name="md-star" size={18} color="black" />
                                <Ionicons name="md-star" size={18} color="black" />
                                <Ionicons name="md-star" size={18} color="black" />
                                <Ionicons name="md-star" size={18} color="black" />
                                <Ionicons name="md-star-outline" size={20} color="black" />
                                <Text style={{ color: "gray", fontSize: 10, marginLeft: 5 }}>64 Reviews</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ color: "gray", fontSize: 15, margin: 15 }}>Full sleeves short dress with three attractive colors and available in various sizes.</Text>
                    <ScrollView horizontal={true} style={{ left: "2%", bottom: "2%" }} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('WebViews')}
                            style={{
                                height: 100, width: 100, backgroundColor: 'silver', marginHorizontal: 15, justifyContent: 'center', borderRadius: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }} >
                            <Image source={{ uri: "https://www.freeiconspng.com/uploads/white-chair-png-31.png" }} style={{ width: 80, height: 80, borderRadius: 10, alignSelf: 'center', justifyContent: "center" }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('WebViewss')}
                            style={{
                                height: 100, width: 100, backgroundColor: 'silver', marginHorizontal: 15, justifyContent: 'center', borderRadius: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }} >
                            <Image source={{ uri: "https://www.freepngimg.com/thumb/chair/29-chair-png-image.png" }} style={{ width: 80, height: 80, borderRadius: 10, alignSelf: 'center', justifyContent: "center" }} />
                        </TouchableOpacity>
                        <View
                            style={{
                                height: 100, width: 100, backgroundColor: 'silver', marginHorizontal: 15, justifyContent: 'center', borderRadius: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }} >
                            <Image source={{ uri: "https://lh3.googleusercontent.com/proxy/DkyLrdMUT7bb0drGj2oJkm5O_zZo0XLhUfoZ4vbxLiKfFvWThYOKKr9icTrUUhxECOh2wKtlz4-pyYpmCZXdlX6G6TIht0WhB8QwqUxCTF-8tjR983ttwUdOglM" }} style={{ width: 80, height: 80, borderRadius: 10, alignSelf: 'center', justifyContent: "center" }} />
                        </View>
                        <View
                            style={{
                                height: 100, width: 100, backgroundColor: 'silver', marginHorizontal: 15, justifyContent: 'center', borderRadius: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }} >
                            <Image source={{ uri: "https://cdn11.bigcommerce.com/s-1u1m3wn/content/assets/images/sofas.png" }} style={{ width: 80, height: 80, borderRadius: 10, alignSelf: 'center', justifyContent: "center" }} />
                        </View>
                    </ScrollView>
                </ScrollView>
                <View style={{ height: 20 }} />
                <TouchableOpacity>
                    <View style={{ flexDirection: "row", height: 45, width: "94%", borderRadius: 10, backgroundColor: "black", justifyContent: "center", alignSelf: "center", alignContent: "center", alignItems: "center", bottom: "3%" }}>
                        <MaterialCommunityIcons name="shopping" size={28} color="white" style={{ marginHorizontal: 10 }} />
                        <Text style={{ fontSize: 25, color: "white" }}>Add To Curt</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    button: {
        height: 70,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
});