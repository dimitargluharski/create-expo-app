import CustomHeader from '@/components/CustomHeader/CustomHeader';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

const RootLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#F88AB9',
      tabBarInactiveTintColor: '#DBDBDB',
      headerShown: false,
    }}>
      <Tabs.Screen
        name='index'
        options={{
          headerTitle: 'Home',
          title: '',
          headerShown: false,
          // header: () => <CustomHeader />,
          tabBarIcon: ({ color, size, focused }) => (
            <>
              <Ionicons name="home" size={size} color={color} />
              {focused
                ? <View
                  style={{
                    position: 'absolute',
                    bottom: -6,
                    width: 5,
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: '#F88AB9',
                  }}
                />
                : null
              }
            </>
          ),
        }}
      />
      <Tabs.Screen
        name='live'
        options={{
          title: '',
          headerShown: true,
          header: () => <CustomHeader />,
          tabBarIcon: ({ color, size, focused }) => (
            <>
              <Ionicons name="radio" size={size} color={color} />
              {focused
                ? <View
                  style={{
                    position: 'absolute',
                    bottom: -6,
                    width: 5,
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: '#F88AB9',
                  }}
                />
                : null
              }
            </>
          ),
        }}
      />
      <Tabs.Screen
        name='rumours'
        options={{
          title: '',
          headerShown: true,
          header: () => <CustomHeader />,
          tabBarIcon: ({ color, size, focused }) => (
            <>
              <Ionicons name="chatbubbles" size={size} color={color} />
              {focused
                ? <View
                  style={{
                    position: 'absolute',
                    bottom: -6,
                    width: 5,
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: '#F88AB9',
                  }}
                />
                : null
              }
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <>
              <Ionicons name="person-circle-sharp" size={size} color={color} />
              {focused
                ? <View
                  style={{
                    position: 'absolute',
                    bottom: -6,
                    width: 5,
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: '#F88AB9',
                  }}
                />
                : null
              }
            </>
          )
        }}
      />
    </Tabs>
  )
}

export default RootLayout;