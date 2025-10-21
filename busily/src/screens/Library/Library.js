import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const Library = ({ scanData }) => {

    console.log(scanData);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.Scroller}>
                {scanData.map((d, index) => (
                    <View key={index} style={styles.usernameWrapper2}>
                            <View style={styles.insideCard}>
                                <Text>{d}</Text>
                            </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        backgroundColor: "#ccc",
    },
    refreshButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: "#ccc",
    },
    usernameWrapper2: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowRadius: 2,
        marginVertical: 5,
    },
    insideCard: {
      display: "flex",
      padding: 10,
    },
    insideCardText: {
        display: "flex",
    },
    detailsButton: {
        height: 20,
        width: 100
    },
    Scroller: {
        padding: 10,
        width: "100%",
    }
});

const mapStateToProps = (state) => {
    return {
        scanData: state.app.scanData,
    };
};

export default connect(mapStateToProps)(Library);
