import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function CardScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
    return (
        <View className="bg-white flex-1">
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="absolute  z-10 rounded-full p-1 shadow top-5 left-2"
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                </TouchableOpacity>
                <View>
                    <Text className="font-bold text-xl text-center">Your Card</Text>
                    <Text className=" text-sm text-center">{restaurant.name}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center"
            >
                <Image source={require('../assets/images/bikeGuy.png')}
                    className="w-20 h-20 rounded-full"
                />
                <Text className="flex-1  pl-5">Còn khoảng 15 - 20 phút</Text>
                <TouchableOpacity >
                    <Text className="font-bold" style={{ color: themeColors.text }}>Change</Text>
                </TouchableOpacity>
            </View>
            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50,
                }}
                className="bg-white pt-5"
            >
                {
                    restaurant.dishes.map((dish, index) => {
                        return (
                            <View key={index}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                                <Text className="font-bold" style={{ color: themeColors.bgColor(1) }}>x{2}</Text>
                                <Image source={dish.image} className="h-14 w-14 rounded-full" />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base">${dish.price}</Text>
                                <TouchableOpacity
                                    className="p-1 rounded-full"
                                    style={{ backgroundColor: themeColors.bgColor(1) }}
                                >
                                    <Icon.Minus strokeWidth={3} width={20} height={20} stroke="white" />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }

            </ScrollView>
            {/* Total */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="p-6 px-8 rounded-t-3xl space-y-4 ">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Tiền đồ ăn</Text>
                    <Text className="text-gray-700">${30}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Phí giao hàng</Text>
                    <Text className="text-gray-700">${10}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-black font-bold">Tổng tiền</Text>
                    <Text className="text-black font-bold">${40}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('OderPreparing')}
                    className="p-3 rounded-full mx-10"
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                >
                    <Text className="text-white text-center font-bold text-lg">Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}