import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import RestaurantCard from './restaurantCard';


export default function FeaturedRow({ title, restaurants, discription }) {
    return (
        <View>
            <View className='flex-row justify-between items-center px-2'>
                <View>
                    <Text className='font-bold text-lg'>{title}</Text>
                    <Text className='text-gray-500 text-xs'>{discription}</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{ color: themeColors.text }} className='font-semibold'>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible py-5"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}>
                {
                    restaurants.map((restaurant, index) => (
                        <RestaurantCard
                            item={restaurant}
                            key={index}
                        />


                    ))
                }
            </ScrollView>
        </View>
    );
}
