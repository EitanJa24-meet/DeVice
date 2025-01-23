import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ padding: 20 }}>
      <Text>This is the App draft for the DeVice</Text>
      <Link href="/Home" style={{ color: "blue", marginTop: 10 }}>
        Go to Home
      </Link>
    </View>
  );
}



// style={{
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
// }}