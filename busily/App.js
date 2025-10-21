/*import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.post) {
            // Update business card in db
        }
    }, [route.params?.post]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Business Card: {route.params?.post}</Text>
        </View>
    );
}

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');

    return (
        <>
            <TextInput
                multiline
                placeholder="Full name, Occupation"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name: 'Home',
                        params: { post: postText },
                        merge: true,
                    });
                }}
            />
        </>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator mode="modal">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CreatePost" component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
*/
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppRouter from './src/Index';
import 'react-native-gesture-handler';
class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AppRouter />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
