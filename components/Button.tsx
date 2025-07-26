import { Pressable, Text, View } from "react-native"

export const Button = () => {
  return (
    <View>
      <Pressable onPress={() => alert('You pressed the button!')}>
        <Text>
          Press me!
        </Text>
      </Pressable>
    </View>
  )
}