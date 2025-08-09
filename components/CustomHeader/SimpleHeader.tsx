import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

interface SimpleHeaderProps {
  title: string;
  showBackButton?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const SimpleHeader = ({
  title,
  showBackButton = false,
  backgroundColor = '#F88AB9',
  textColor = '#fff'
}: SimpleHeaderProps) => {
  return (
    <SafeAreaView style={{
      backgroundColor: backgroundColor,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        minHeight: 60,
      }}>
        {showBackButton && (
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ marginRight: 15 }}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={textColor}
            />
          </TouchableOpacity>
        )}

        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: textColor,
          flex: 1,
          textAlign: showBackButton ? 'left' : 'center',
        }}>
          {title}
        </Text>

        {showBackButton && <View style={{ width: 24 }} />}
      </View>
    </SafeAreaView>
  );
};

export default SimpleHeader;
