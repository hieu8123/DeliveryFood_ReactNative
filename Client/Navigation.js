import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/homeScreen';
import { CardScreen, RestaurantScreen, OderPreparingScreen, DeliveryScreen } from "./screens"

const Stack = createNativeStackNavigator();

export default Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Card" options={{ presentation: "modal" }} component={CardScreen} />
                <Stack.Screen name="OderPreparing" options={{ presentation: "fullScreenModal" }} component={OderPreparingScreen} />
                <Stack.Screen name="Delivery" options={{ presentation: "fullScreenModal" }} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}