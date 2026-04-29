import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

// Enable animation on Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Collapsible({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{isOpen ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  header: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    fontSize: 14,
  },
  content: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
