import React, { ReactNode, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { TPickerItem } from "./types";
import { appColors } from "../../utils/constants/colors";

interface Props<T> {
  items: TPickerItem<T>[];
  onValueChanged: (value?: T) => void;
  label: string;
  placeholder?: TPickerItem<T>;
  icon: ReactNode;
}

function TPicker<T>({
  items,
  onValueChanged,
  label,
  icon,
  placeholder,
}: Props<T>) {
  const [selectedItem, setSelectedItem] = useState<TPickerItem<T> | undefined>(
    placeholder || items[0]
  );

  const handleValueChanged = (value: T) => {
    const selectedItem =
      items.find((item) => item.value === value) || placeholder;

    setSelectedItem(selectedItem);
    onValueChanged(selectedItem?.value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect
        onValueChange={handleValueChanged}
        placeholder={placeholder || {}}
        items={items}
        value={selectedItem?.value}
      >
        <View style={styles.pickerContainer}>
          <View style={styles.pickerContent}>
            <Text style={styles.selectedItemText}>
              {selectedItem?.label || placeholder?.label}
            </Text>
          </View>
          <View style={styles.iconContainer}>{icon}</View>
        </View>
      </RNPickerSelect>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
  },
  label: {
    fontSize: 14,
    color: appColors.snow,
    fontFamily: "Europa Light",
  },
  pickerContainer: {
    display: "flex",
    flexDirection: "row",
    height: 56,
    borderRadius: 8,
    overflow: "hidden",
  },
  pickerContent: {
    backgroundColor: appColors.snow,
    display: "flex",
    justifyContent: "center",
    padding: 20,
    flexGrow: 1,
  },
  selectedItemText: {
    fontSize: 15,
    color: appColors.stale,
    fontFamily: "Europa Light",
  },
  iconContainer: {
    backgroundColor: appColors.rust,
    width: 56,
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TPicker;
