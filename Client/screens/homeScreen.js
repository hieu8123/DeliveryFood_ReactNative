import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Chỉ import StatusBar từ expo-status-bar
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { Categories, FeaturedRow } from '../components'
import { featured } from '../constants';


export default function HomeScreen() {
    let barstyle = "dark-content";
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle={barstyle} />
            {/* Search bar */}
            <View className="flex-row items-center space-x-2 px-4 -mb-2" >
                <View className="flex-row flex-1 items-center mt-3 p-3 rounded-full border border-gray-3">
                    <Icon.Search height='25' width='25' stroke='gray' />
                    <TextInput placeholder='restaurants' className='ml-2 flex-1' />
                    <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-500'>
                        <Icon.MapPin height='25' width='25' stroke='gray' />
                        <Text>TP.HCM</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className='mt-4 p-3 rounded-full'>
                    <Icon.Sliders height='20' width='20' stroke='gray' />
                </View>

            </View>

            {/* main */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}>
                {/* categories */}
                <Categories />
            </ScrollView>
            {/* featured */}
            <ScrollView
                className="mt-3"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 200
                }}>
                {
                    [featured, featured, featured].map((item, index) => {

                        return (
                            <FeaturedRow
                                key={index}
                                title={item.title}
                                restaurants={item.restaurants}
                                discription={item.description}
                            />
                        )
                    })
                }
            </ScrollView>

        </SafeAreaView>
    )
}