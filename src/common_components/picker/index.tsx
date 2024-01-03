import React, { ReactNode, useState } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { TPickerItem } from "./types";

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
    <View style={{ display: "flex", gap: 10 }}>
      <Text style={{ fontSize: 14, fontWeight: "300", color: "white" }}>
        {label}
      </Text>
      <RNPickerSelect
        onValueChange={handleValueChanged}
        placeholder={placeholder || {}}
        items={items}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 56,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              padding: 20,
              flexGrow: 1,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "300", color: "#6E8CA0" }}>
              {selectedItem?.label || placeholder?.label}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#D97D54",
              width: 56,
              height: 56,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </View>
        </View>
      </RNPickerSelect>
    </View>
  );
}

export default TPicker;
