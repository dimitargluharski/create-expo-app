import { FlatList, Text, View } from "react-native";

const values = [
  'a',
  'b',
  'c',
  'd'
];

export const SingleItem = ({ item }: any) => {
  return (
    <View>
      <Text>
        {item}
      </Text>
    </View>
  )
}

export default function CustomListComponent() {
  return (
    <FlatList renderItem={SingleItem} data={values} />
  )
}