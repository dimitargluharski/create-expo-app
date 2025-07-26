import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const namesData = [
  { id: 1, name: "Dimitar" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Peter" },
  { id: 4, name: "Anna" },
  { id: 5, name: "Gerogi" }
];

const NameItem = ({ item }: { item: { id: number; name: string } }) => {
  return (
    <View>
      <Link href={`/names/${item.id}`}>{item.name}</Link>
    </View>
  );
};

export default function Index() {
  return (
    <View>
      <Text>Names Screen</Text>

      <FlatList
        data={namesData}
        renderItem={({ item }) => <NameItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}