
import { View, Text, StyleSheet, Image , ImageProps} from "react-native";
import { styles } from "./style";

type imagesPros = {
  selected: boolean
}
export default function Avatar({selected  , ...res}: imagesPros & ImageProps) {
  return (
    <View >
    <Image
    style={[styles.image , selected && styles.selected]}
   {...res}
    />
    </View>
  );
}
