import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function LocationScreen() {
    const [coords, setCoords] = useState(null);

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Location permission required');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setCoords(location.coords);

        await Notifications.requestPermissionsAsync();
        await Notifications.scheduleNotificationAsync({
            content: {
                title: '✨ Başarılı! ✨',
                body: 'Senin büyülü konumunu buldum! 🧚‍♀️',
            },
            trigger: null,
        });
    };

    return (
        <LinearGradient colors={['#E0F8E0', '#FFF0F5']} style={styles.container}>

            <TouchableOpacity style={styles.magicButton} onPress={getLocation}>
                <Text style={styles.btnText}>🌍 Konumumu Bul</Text>
            </TouchableOpacity>

            {coords && (
                <View style={styles.infoCard}>
                    <Text style={styles.coordTitle}>📍 Koordinatlar</Text>
                    <Text style={styles.coordText}>Enlem: {coords.latitude}</Text>
                    <Text style={styles.coordText}>Boylam: {coords.longitude}</Text>
                </View>
            )}

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    magicButton: {
        backgroundColor: '#C7CEEA',
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 50,
        shadowColor: '#C7CEEA',
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 8,
    },
    btnText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    infoCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 25,
        borderRadius: 30,
        width: '90%',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFF',
    },
    coordTitle: {
        fontSize: 20,
        color: '#FFB7B2',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    coordText: {
        fontSize: 16,
        color: '#6D6D6D',
        marginBottom: 5,
    },
});