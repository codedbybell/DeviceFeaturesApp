import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import LocationScreen from './screens/LocationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#FFB7B2' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '🏠 Ana Sayfa' }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: '📸 Fotoğraf Köşesi' }}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{ title: '📍 Konum Sihri' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}