import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const studentName = "Your Name";
  const university = "Your University";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.info}>Name: {studentName}</Text>
      <Text style={styles.info}>University: {university}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  info: {
    fontSize: 18,
    marginTop: 8,
  },
});
