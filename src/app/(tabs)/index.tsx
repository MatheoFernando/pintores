import { Filters } from "@/components/filter/filters";
import { theme } from "@/theme";
import { FILTERS } from "@/utils/filters";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0])

  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:12,
    paddingTop:52,
    backgroundColor: theme.colors.black,
  },
  text: {
    color: theme.colors.white,
    fontFamily:theme.fontFamily.bold
  },
});
