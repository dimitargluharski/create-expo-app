import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const RootLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#007AFF',
      headerShown: true,
    }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='live'
        options={{
          title: 'Live',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="radio" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='rumours'
        options={{
          title: 'Rumours',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default RootLayout;