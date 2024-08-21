import { theme } from "@/theme";
import { View, Text, StyleSheet } from "react-native";

export default function Mensagens() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mensagens</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
  },
  text: {
    color: theme.colors.white,
  },
});
