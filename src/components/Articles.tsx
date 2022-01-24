import { useEffect, useState } from "react";
import { FlatList, Linking, StyleSheet, Text, View } from "react-native";

const NEWS_API_URL = `https://newsapi.org/v2/everything?lan=en&q=apple&from=2022-01-16&to=2022-01-16&sortBy=popularity&apiKey=17a54e92fb5d4501a47b37cda20390b7`;
const Articles = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    fetch(NEWS_API_URL)
      .then((data) => data.json())
      .then(({ articles }) => {
        setNews(articles);
      });
  }, []);

  return (
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
  );
};
export default Articles;

const styles = StyleSheet.create({
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
