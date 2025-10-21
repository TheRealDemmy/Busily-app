import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Store from "./reduxStore/Store";
import CardPage from "./screens/Card/Card";
import ScanPage from "./screens/Scan/Scan";
import LibraryPage from "./screens/Library/Library";
import EditPage from "./screens/Edit/Edit";

const Tab = createBottomTabNavigator();

export default function AppRouter () {
    return (
        <View style={styles.flex}>
            <Provider store={Store}>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Card"
                        screenOptions={{
                            activeTintColor: '#42f44b',
                        }}>
                        <Tab.Screen
                            name="Card"
                            component={CardPage}
                            options={{
                                tabBarLabel: 'Card',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons
                                        name="card"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Scan"
                            component={ScanPage}
                            options={{
                                tabBarLabel: 'Scan',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons
                                        name="barcode-scan"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Library"
                            component={LibraryPage}
                            options={{
                                tabBarLabel: 'Library',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="library" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Edit"
                            component={EditPage}
                            options={{tabBarButton: () => null}}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
});
