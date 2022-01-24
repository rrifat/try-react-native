import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ColorBox from "../components/ColorBox";

interface ColorPaletteProps extends StackScreenProps<ParamListBase> {}

const ColorPalette = ({ route }: ColorPaletteProps) => {
  const { colors }: any = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
    />
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
