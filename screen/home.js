import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SliderBox } from "react-native-image-slider-box"
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons'

export default class Home extends Component {
    static navigationOptions = {
        header: false
    }
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree",
            ],
            Categories: [
                {
                    "icon": "tshirt",
                    "type": "Furniture"
                },
                {
                    "icon": "tshirt",
                    "type": "Living Room"
                },
                {
                    "icon": "tshirt",
                    "type": "Bedroom"
                },
                {
                    "icon": "tshirt",
                    "type": "Workplace"
                },
                {
                    "icon": "tshirt",
                    "type": "Furniture"
                },
                {
                    "icon": "tshirt",
                    "type": "Furniture"
                },
            ],
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

            ]
        };
    }

    componentDidMount() {
        console.disableYellowBox = true
      }

    render() {
        let Categorieslist = this.state.Categories.map((Name, index) => {
            return (
                <View
                    key={index}
                    style={{
                        height: 80, width: 150, backgroundColor: '#fff', marginHorizontal: 10, justifyContent: 'center', borderRadius: 8, marginVertical: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 9,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 10.00,
                        elevation: 14,
                    }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('middle')}>
                        <FontAwesome5 name={Name.icon} size={24} color="black" style={{ alignSelf: 'center' }} />
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>{Name.type}</Text>
                    </TouchableOpacity>
                </View>
            );
        })
        let Trendslist = this.state.Trends.map((TrendsData, index) => {
            return (
                <View
                    key={index}
                    style={{
                        height: 220, width: 210, backgroundColor: '#fff', marginHorizontal: 10, justifyContent: 'center', borderRadius: 8, marginVertical: 10,
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
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>{TrendsData.amount}</Text>
                            <AntDesign name="pluscircle" size={16} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

            );
        })
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <ScrollView>
                    <SliderBox
                        images={this.state.images}
                        sliderBoxHeight={250}
                        onCurrentImagePressed={index =>
                            console.warn(`image ${index} pressed`)
                        }
                    >
                    </SliderBox>
                    <View style={{ position: 'absolute', flexDirection: "row", marginHorizontal: 20, marginVertical: 40 }}>
                        <Feather name="menu" size={24} color="black" />
                        <View style={{ flexDirection: "row", marginHorizontal: 280 }}>
                            <AntDesign name="search1" size={24} color="black" />
                            <MaterialCommunityIcons name="shopping" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        </View>
                    </View>
                    <View style={{ height: 10 }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('middle')}>
                            <View style={{ flexDirection: "row" }} >
                                <Text style={{ fontSize: 15, color: 'gray', margin: 6 }}>View all</Text>
                                <AntDesign name="arrowright" size={18} color="gray" style={{ alignSelf: 'center' }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {Categorieslist}
                    </ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Top Trends</Text>
                        <View style={{ flexDirection: "row" }} >
                            <Text style={{ fontSize: 15, color: 'gray', margin: 6 }}>See All</Text>
                        </View>
                    </View>
                    <ScrollView horizontal={true} style={styles.photosContainer} showsHorizontalScrollIndicator={false}>
                        {Trendslist}
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
    photosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16,
    }
});