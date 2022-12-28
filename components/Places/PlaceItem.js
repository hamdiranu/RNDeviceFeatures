import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <View>
      <Pressable onPress={onSelect}>
        <Image source={{ uri: place.imageUri }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({});
