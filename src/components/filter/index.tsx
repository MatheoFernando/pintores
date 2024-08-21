
import { Text, Pressable , PressableProps} from "react-native";
import { styles } from "./style";


type filterPros = {
  selected: boolean,
  filter:string
}
export default function Filter({filter ,selected  , ...res}: filterPros & PressableProps) {
  return (
  <Pressable style={[styles.Pressable, selected && styles.Pressableselected]}{...res}>
<Text style={styles.text}>{filter}</Text>
  </Pressable>
  );
}
