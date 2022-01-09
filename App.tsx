import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Linking,
  Platform,
} from "react-native";

const NEWS_API_URL = `https://newsapi.org/v2/everything?language=en&q=apple&from=2021-12-09&sortBy=publishedAt&apiKey=17a54e92fb5d4501a47b37cda20390b7`;

export default function App() {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch(NEWS_API_URL)
      .then((data) => data.json())
      .then(({ articles }) => setNews(articles));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Author: {item.author}</Text>
            <Text>{item.publishedAt}</Text>
            <Text>{item.description}</Text>
            <Text
              style={styles.url}
              onPress={() => {
                Linking.openURL(`${item.url}`);
              }}
            >
              {item.url}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.url}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  item: {
    backgroundColor: "#c8f0ec67",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
  },
  url: {
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
});
