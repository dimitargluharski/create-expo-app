import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const namesData = [
  { id: 1, name: "Samira" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Ahri" },
  { id: 4, name: "Anna" },
  { id: 5, name: "Gwen" }
];

export default function UserDetails() {
  const { id } = useLocalSearchParams();

  const user = namesData.find(item => item.id.toString() === id);

  if (!user) {
    return (
      <View>
        <Text>User not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>
        User Details
      </Text>

      <Text>
        ID: {user.id}
      </Text>

      <Text>
        Name: {user.name}
      </Text>
    </View>
  )
}