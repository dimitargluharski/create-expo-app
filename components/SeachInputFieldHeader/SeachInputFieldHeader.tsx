import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = [
  { id: 1, name: "All", icon: "🏠" },
  { id: 2, name: "Transfers", icon: "🔄" },
  { id: 3, name: "Rumors", icon: "💬" },
  { id: 4, name: "News", icon: "📰" },
  { id: 5, name: "Matches", icon: "⚽" },
  { id: 6, name: "Players", icon: "👤" },
  { id: 7, name: "Teams", icon: "🏆" },
  { id: 8, name: "Leagues", icon: "🏅" },
];

const SearchInputFieldHeader = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <View style={{
      backgroundColor: '#fff',
      paddingVertical: 10,
    }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => setActiveCategory(category.id)}
            style={{
              backgroundColor: activeCategory === category.id ? '#F88AB9' : '#f0f0f0',
              paddingHorizontal: 20,
              paddingVertical: 12,
              borderRadius: 25,
              marginRight: 12,
              flexDirection: 'row',
              alignItems: 'center',
              minWidth: 80,
              justifyContent: 'center',
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
            }}
          >
            <Text style={{ fontSize: 16, marginRight: 5 }}>
              {category.icon}
            </Text>
            <Text
              style={{
                color: activeCategory === category.id ? '#fff' : '#333',
                fontWeight: activeCategory === category.id ? 'bold' : 'normal',
                fontSize: 14,
              }}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchInputFieldHeader;