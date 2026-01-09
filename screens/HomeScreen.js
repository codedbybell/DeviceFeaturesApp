import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
    return (
        <LinearGradient
            colors={['#FFF0F5', '#E0F8E0']}
            style={styles.container}
        >
            <Text style={styles.title}>✨ Device Features ✨</Text>

            <TouchableOpacity
                style={styles.fairyButton}
                onPress={() => navigation.navigate('Camera')}
            >
                <Text style={styles.buttonText}>📸 Kamera & Galeri</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.fairyButton, styles.greenButton]}
                onPress={() => navigation.navigate('Location')}
            >
                <Text style={styles.buttonText}>📍 Konum Sihri</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#D88A9A',
        marginBottom: 40,
        textShadowColor: 'rgba(255, 192, 203, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
    fairyButton: {
        backgroundColor: '#FFB7B2',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    greenButton: {
        backgroundColor: '#BCE29E',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 1,
    },
});