import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { CardIcon, DishRow } from '../components';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlices';



export default function RestaurantScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;
    const dispath = useDispatch();
    //console.log(item)
    React.useEffect(() => {
        if (item && item.id) {
            dispath(setRestaurant({ ...item }))
        }
    }, []);

    return (
        <View>
            <CardIcon />
            <StatusBar style='light' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    className="relative"
                >
                    <Image className="w-full h-72" source={item.image} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-8 left-4 p-2 bg-gray-50 rounded-full shadow">
                        <Icon.ArrowLeft stroke={themeColors.bgColor(1)} strokeWidth={3} />
                    </TouchableOpacity>

                </View>
                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-white -mt-12 pt-2 p-4"
                >
                    <Text className="font-bold text-2xl">{item.name}</Text>
                    <View className="flex-row space-x-5">

                        <View className="flex-row mt-2">
                            <Image className="h-4 w-4" source={require("../assets/images/fullStar.png")} />
                            <Text className="text-sm">
                                <Text className="text-green-700">{item.start}</Text>
                                <Text className="text-gray-700">
                                    ({item.reviews}) . <Text className="font-semibold">{item.category}</Text>
                                </Text>
                            </Text>
                        </View>
                        <View className="flex-row  items-center space-x-1 mt-1">
                            <Icon.MapPin color="gray" height="15" width="15" />
                            <Text className="text-sm">Nearly. {item.address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-1">{item.description}</Text>
                </View>
                <View className="pb-20 bg-white">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {/* dishes */}
                    {

                        item.dishes.map((dish, index) => {
                            return (
                                <DishRow item={dish} key={index} />
                            )
                        })
                    }
                </View>


            </ScrollView>
        </View>
    )
}