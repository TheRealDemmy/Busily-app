import React, { useEffect } from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button} from "react-native";
import { connect } from "react-redux";
import {fetchMainUser} from "../../actions/Actions";

const Edit = ({fetchMainUser, user, navigation}) => {
    const [postText, setPostText] = React.useState(user?.name || '');

    return (
        <View style={styles.container}>
                <View style={styles.usernameContainer}>
                    <TextInput
                        style={styles.refreshButton}
                        placeholder="Your Name"
                        value={postText}
                        onChangeText={setPostText}
                    />
                    <Button
                        style={styles.usernameContainer}
                        title="Done"
                        onPress={() => {
                            // Update user name using Redux action
                            fetchMainUser({ name: postText });
                            navigation.navigate('Card');
                        }}
                    />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    insideCard: {
        backgroundColor: "rgba(16,71,73,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        width: 345,
        height: 550,
        borderRadius: 10,

    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        width: 200,
        height: 100,
        backgroundColor: "#ccc",
    },
    refreshButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: "20%",
        height: 50,
        backgroundColor: "#ccc",
    },
    usernameContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    detailsButton: {
        height: 20,
        width: 100
    }
});

const mapStateToProps = (state) => ({
    user: state.app.user,
})

const mapDispatchToProps = (dispatch) => ({
    fetchMainUser: (user) => dispatch(fetchMainUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
