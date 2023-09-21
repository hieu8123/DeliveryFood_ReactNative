import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme'
import { useNavigation } from "@react-navigation/native"

export default function RestaurantCard({ item }) {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', { ...item })}>
            <View
                className="mr-6 mb-3 p-2 bg-white rounded-3xl shadow-lg"
                style={{
                    shadowColor: themeColors.bgColor(1),
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5 // elevation tương đương với shadow
                }}
            >
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <Text className="text-lg font-bold pt-2">{item.name}</Text>
                <View className="flex-row">
                    <Image className="h-4 w-4" source={require("../assets/images/fullStar.png")} />
                    <Text className="text-xs">
                        <Text className="text-green-700">{item.start}</Text>
                        <Text className="text-gray-700">
                            ({item.reviews}) . <Text className="font-semibold">{item.category}</Text>
                        </Text>
                    </Text>
                </View>
                <View className="flex-row  items-center space-x-1 mt-1">
                    <Icon.MapPin color="gray" height="15" width="15" />
                    <Text className="text-xs">Nearly. {item.address}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
