import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <View className='mt-4'>
            <ScrollView
                // className="p-4"
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    categories?.map((category, index) => {
                        let isActive = category.id == activeCategory;
                        let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-100';
                        let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-600'
                        return (
                            <View key={category._id} className="flex justify-center items-center mr-6 ">
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(category.id)}
                                    className={"p-2 rounded-full shadow " + btnClass} >
                                    <Image style={{ width: 45, height: 45 }}
                                        source={category.image} />
                                    {/* <Text className={'text-sm ' + textClass}>
                                        {category.name}
                                    </Text> */}
                                </TouchableOpacity>
                                <Text className={"text-sm " + textClass}>{category.name}</Text>
                            </View>
                        )

                    })
                }
            </ScrollView>
        </View>
    )
}