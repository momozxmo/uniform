import 'react-native-gesture-handler';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CheckScreen from './screens/CheckScreen';
import DressCodeScreen from './screens/DressCodeScreen';
import ForgotScreen from './screens/ForgotScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 🔹 แท็บหลัก
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#0E1621',
          borderTopColor: '#1f2937',
          height: 70,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#60a5fa',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'หน้าหลัก') return <Ionicons name="home" size={size} color={color} />;
          if (route.name === 'เช็คชุดนักศึกษา') return <MaterialCommunityIcons name="tshirt-crew" size={size} color={color} />;
          if (route.name === 'ระเบียบการแต่งกาย') return <Ionicons name="book-outline" size={size} color={color} />;
          if (route.name === 'โปรไฟล์') return <Ionicons name="person-circle-outline" size={size} color={color} />;
          return null;
        },
      })}
    >
      <Tab.Screen name="หน้าหลัก" component={HomeScreen} />
      <Tab.Screen name="เช็คชุดนักศึกษา" component={CheckScreen} />
      <Tab.Screen name="ระเบียบการแต่งกาย" component={DressCodeScreen} />
      <Tab.Screen name="โปรไฟล์" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// 🔹 สแต็กหลัก
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Forgot" component={ForgotScreen}/>

        <Stack.Screen name="Main" component={MainTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
