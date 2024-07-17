import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "../redux/store";
import Chat from "@/components/Chat";

export default function TabTwoScreen() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
