import { FlatList } from "react-native-gesture-handler";
import Filter from "@/components/filter/index";
import { styles } from "./style";
export type FilterProps = {
  filters: string[]
  filter: string
  onChange: (value: string) => void
}

export function Filters({ filters, filter, onChange }: FilterProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}