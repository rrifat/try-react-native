import { StyleSheet, Text, View } from "react-native";

interface ColorBoxProps {
  hexCode: string;
  colorName: string;
}
const ColorBox = ({ hexCode, colorName }: ColorBoxProps) => {
  const colorStyle = {
    backgroundColor: hexCode,
  };
  const textStyle = {
    color:
      parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={[styles.text, textStyle]}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};
export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
