import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMessagesThunk } from "../app/redux/operations";
import ChatItem from "./ChatItem";
import { selectMessages } from "@/app/redux/slice";

interface Message {
  id: number;
  sender: string;
  message: string;
}
interface RootState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const messages = selectMessages;
  console.log(messages);

  useEffect(() => {
    dispatch(fetchAllMessagesThunk());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatItem message={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default Chat;
