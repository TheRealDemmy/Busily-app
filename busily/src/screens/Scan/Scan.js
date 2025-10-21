import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Linking from 'expo-linking';
import { getScanData } from "../../actions/Actions";
import { connect } from "react-redux";

const Scan = ({navigation, getScanData}) => {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Reset states when screen comes into focus
            setScanned(false);
        });

        return unsubscribe;
    }, [navigation]);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        getScanData(data);
        Linking.openURL(data).then(r => null);
    };

    if (!permission) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Camera access is required to scan barcodes</Text>
                <Button title="Grant Camera Permission" onPress={requestPermission} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={StyleSheet.absoluteFillObject}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr", "pdf417"],
                }}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    message: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 16,
        color: "#333",
    },
    ScanButton: {
        backgroundColor: "rgba(16,71,73,0.5)",
        borderRadius: 300,
        width: "100%",
        padding: 100,
    },
    ScanInside: {
        marginVertical: 20,
        marginHorizontal: 5,
        color: "#000",
        fontSize: 32,
    }
});

const mapStateToProps = (state) => ({
    scanData: state.app.scanData,
})

const mapDispatchToProps = (dispatch) => ({
    getScanData: (data) => dispatch(getScanData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Scan)
