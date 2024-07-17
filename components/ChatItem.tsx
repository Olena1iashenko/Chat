import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ChatItemProps {
  message: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  message: {
    fontSize: 16,
  },
});

export default ChatItem;
