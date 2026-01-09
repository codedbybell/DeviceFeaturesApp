import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function CameraScreen() {
    const [imageUri, setImageUri] = useState(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required');
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Camera permission required');
            return;
        }
        const result = await ImagePicker.launchCameraAsync();
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
    };

    return (
        <LinearGradient colors={['#FFF0F5', '#FDF5E6']} style={styles.container}>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.softButton} onPress={pickImage}>
                    <Text style={styles.text}>🖼️ Galeriden Seç</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.softButton, styles.cameraButton]} onPress={takePhoto}>
                    <Text style={styles.text}>📷 Fotoğraf Çek</Text>
                </TouchableOpacity>
            </View>

            {imageUri && (
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: imageUri }} style={styles.image} />
                </View>
            )}

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 30,
    },
    softButton: {
        backgroundColor: '#FFDAC1', // Pastel Şeftali
        padding: 15,
        borderRadius: 20,
        flex: 1,
        alignItems: 'center',
        shadowColor: '#FFB7B2',
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    cameraButton: {
        backgroundColor: '#E2F0CB', // Pastel Limon/Yeşil
    },
    text: {
        color: '#5D4037', // Yumuşak kahve tonu (siyah yerine)
        fontWeight: 'bold',
    },
    imageWrapper: {
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        resizeMode: 'cover',
    },
});