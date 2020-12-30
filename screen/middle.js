import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SliderBox } from "react-native-image-slider-box"
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons'

export default class Middle extends Component {
    static navigationOptions = {
        header: false
    }
    constructor(props) {
        super(props);
        this.state = {
            Trends: [
                {
                    "uri": "https://images-na.ssl-images-amazon.com/images/I/71wjbd%2BPeBL._SX522_.jpg",
                    "name": "Beautiful Couch",
                    "des": "Full sleeves short dress with three attractive colors and available in various sizes.",
                    "amount": "324.69 USD"
                },
                {
                    "uri": "https://images-na.ssl-images-amazon.com/images/I/71wjbd%2BPeBL._SX522_.jpg",
                    "name": "Beautiful Couch",
                    "des": "Full sleeves short dress with three attractive colors and available in various sizes.",
                    "amount": "324.69 USD"
                },
                {
                    "uri": "https://images-na.ssl-images-amazon.com/images/I/71wjbd%2BPeBL._SX522_.jpg",
                    "name": "Beautiful Couch",
                    "des": "Full sleeves short dress with three attractive colors and available in various sizes.",
                    "amount": "324.69 USD"
                },
                {
                    "uri": "https://images-na.ssl-images-amazon.com/images/I/71wjbd%2BPeBL._SX522_.jpg",
                    "name": "Beautiful Couch",
                    "des": "Full sleeves short dress with three attractive colors and available in various sizes.",
                    "amount": "324.69 USD"
                },

            ],
            Arrivals: [
                {
                    "uri": "https://m.media-amazon.com/images/I/71TbFGDY5iL._AC_UL320_.jpg",
                    "des": "A very generously made sofa from all the best materials yields a perfect modular sofa for your living room.",
                    "amount": "454.69 USD"
                },
                {
                    "uri": "https://m.media-amazon.com/images/I/71TbFGDY5iL._AC_UL320_.jpg",
                    "des": "A very generously made sofa from all the best materials yields a perfect modular sofa for your living room.",
                    "amount": "454.69 USD"
                },
                {
                    "uri": "https://m.media-amazon.com/images/I/71TbFGDY5iL._AC_UL320_.jpg",
                    "des": "A very generously made sofa from all the best materials yields a perfect modular sofa for your living room.",
                    "amount": "454.69 USD"
                },
                {
                    "uri": "https://m.media-amazon.com/images/I/71TbFGDY5iL._AC_UL320_.jpg",
                    "des": "A very generously made sofa from all the best materials yields a perfect modular sofa for your living room.",
                    "amount": "454.69 USD"
                },

            ],
            Sellers: [
                {
                    "uri": "https://images-na.ssl-images-amazon.com/images/I/91WSklOupmL._SX679_.jpg",
                    "sellers": "Zara Furniture World",
                    "dis": "Get 25% OFF"
                },
                {
                    "uri": "https://images-na.ssl-images-amazon.com/images/I/71TbFGDY5iL._SX679_.jpg",
                    "sellers": "Atobe Furniture World",
                    "dis": "Get 25% OFF"
                },
                {
                    "uri": "https://images-na.ssl-images-amazon.com/images/I/91WSklOupmL._SX679_.jpg",
                    "sellers": "Zara Furniture World",
                    "dis": "Get 25% OFF"
                },
                {
                    "uri": "https://images-na.ssl-images-amazon.com/images/I/71TbFGDY5iL._SX679_.jpg",
                    "sellers": "Atobe Furniture World",
                    "dis": "Get 25% OFF"
                },

            ]
        };
    }

    render() {
        let Trendslist = this.state.Trends.map((TrendsData, index) => {
            return (
                <View
                    key={index}
                    style={{
                        height: 220, width: 210, backgroundColor: '#fff', marginVertical: 10, justifyContent: 'center', borderRadius: 8, marginHorizontal: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('end')}>
                        <Image source={{ uri: TrendsData.uri }} style={{ width: 180, height: 100, borderRadius: 8, alignSelf: 'center' }} />
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ fontSize: 14, marginLeft: 10, fontWeight: "bold" }}>{TrendsData.name}</Text>
                                <View style={{ marginLeft: 5, flexDirection: "row", }}>
                                    <View style={{ height: 5, width: 5, borderRadius: 60, backgroundColor: 'red', alignSelf: "center", marginHorizontal: 2 }} />
                                    <Text style={{ fontSize: 10, color: 'red', textAlign: 'center' }}>New</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 10, marginLeft: 10, marginRight: 10 }}>{TrendsData.des}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>{TrendsData.amount}</Text>
                            <AntDesign name="pluscircle" size={16} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

            );
        })
        let Arrivalslist = this.state.Arrivals.map((ArrivalsData, index) => {
            return (
                <View
                    key={index}
                    style={{
                        height: 60, width: 290, backgroundColor: '#fff', marginHorizontal: 10, justifyContent: 'center', borderRadius: 8, marginVertical: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={{ uri: ArrivalsData.uri }} style={{ width: 90, height: 50, borderRadius: 8, alignSelf: 'center', marginLeft: 5 }} />
                        <View style={{ flexDirection: "column", marginLeft: 5, width: "100%" }}>
                            <Text style={{ fontSize: 8, width: "60%" }}>{ArrivalsData.des}</Text>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 120 }}>
                                <Text style={{ fontSize: 10, fontWeight: "bold" }}>{ArrivalsData.amount}</Text>
                                <AntDesign name="pluscircle" size={16} color="black" />
                            </View>
                        </View>
                    </View>
                </View>

            );
        })
        let Sellerslist = this.state.Sellers.map((SellersData, index) => {
            return (
                <View key={index} style={{ marginHorizontal: 10 }}>
                    <Image source={{ uri: SellersData.uri }} style={{ width: 270, height: 150, borderRadius: 10, alignSelf: 'center', }} />
                    <View style={{ position: "absolute", left: "4%", top: "4%" }}>
                        <Text style={{ fontSize: 20, color: "#F1F1F1", fontWeight: "bold" }}>{SellersData.sellers}</Text>
                        <Text style={{ fontSize: 18, color: "#F1F1F1", fontWeight: "bold" }}>{SellersData.dis}</Text>
                    </View>
                </View>
            );
        })
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: "6%", marginHorizontal: "3%" }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Furniture</Text>
                        <View style={{ flexDirection: "row" }}>
                            <MaterialCommunityIcons name="shopping" size={24} color="black" />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: 'center', bottom: "4%" }}>
                        <View style={[styles.textInputStyle, { flexDirection: 'row', alignSelf: 'center' }]}>
                            <Ionicons name="ios-search" size={30} color="gray" style={{ marginHorizontal: 15, top: 5 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search unique furniture..."
                            />
                        </View>
                        <View style={{
                            height: 40, width: 40, backgroundColor: '#fff', justifyContent: 'center', borderRadius: 10, alignItems: "center", alignSelf: "center", alignContent: "center", marginHorizontal: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }} >
                            <Ionicons name="ios-switch" size={25} color="black" />
                        </View>
                    </View>
                    <View style={{ height: 10 }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, bottom: "3%" }}>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Morden</Text>
                            <View style={{ marginLeft: 10, flexDirection: "row", }}>
                                <View style={{ height: 5, width: 5, borderRadius: 60, backgroundColor: 'gray', alignSelf: "center", marginHorizontal: 2 }} />
                                <Text style={{ fontSize: 10, color: 'gray', textAlign: 'center' }}>Good Quaily Items</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView horizontal={true} style={{ bottom: "3%" }} showsHorizontalScrollIndicator={false}>
                        {Trendslist}
                    </ScrollView>
                    <View style={{ height: 10 }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, bottom: "4%" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>New Arrivals</Text>
                            <View style={{ marginLeft: 10, flexDirection: "row", }}>
                                <View style={{ height: 5, width: 5, borderRadius: 60, backgroundColor: 'gray', alignSelf: "center", marginHorizontal: 2 }} />
                                <Text style={{ fontSize: 10, color: 'gray', textAlign: 'center' }}>Good Quaily Items</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView horizontal={true} style={{ bottom: "3%" }} showsHorizontalScrollIndicator={false}>
                        {Arrivalslist}
                    </ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 20, paddingRight: 20, paddingTop: 18 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', bottom: "8%" }}>Best Sellers</Text>
                    </View>
                    <ScrollView horizontal={true} style={{ bottom: "4%", left: "1%" }} showsHorizontalScrollIndicator={false}>
                        {Sellerslist}
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 1,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    textInputStyle: {
        height: 40,
        backgroundColor: '#FFFFFF',
        width: "70%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.00,
        elevation: 14,
    },
});