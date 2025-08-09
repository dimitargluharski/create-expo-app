import { Fontisto, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";

const CustomHeader = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchText(''); // Изчистваме текста при затваряне
    }
  };

  return (
    <SafeAreaView style={{
      paddingTop: 10,
    }}>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
        {/* <Ionicons
          name="person-circle-sharp"
          size={30}
          color="#F88AB9"
        /> */}

        {isSearchVisible ? (
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            marginLeft: 15,
          }}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 20,
                paddingHorizontal: 15,
                backgroundColor: '#f9f9f9',
                fontSize: 16,
                padding: 5,
              }}
              placeholder="Search..."
              value={searchText}
              onChangeText={setSearchText}
              autoFocus={true}
            />
            <TouchableOpacity
              onPress={toggleSearch}
              style={{ marginLeft: 10 }}
            >
              <Ionicons
                name="close"
                size={24}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={toggleSearch}>
            <Fontisto
              name="search"
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  )
}

export default CustomHeader;