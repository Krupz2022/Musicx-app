import React from "react";
import { ScrollView, StyleSheet, View, Image, FlatList, Dimensions } from "react-native";
import { theme, Header, Box, Text } from "../components";
import SafeAreaView from 'react-native-safe-area-view';
import { TextInput } from "react-native-paper";
import { Feather as Icon } from '@expo/vector-icons';
import { Data } from "../data/searchData";

const SearchHeader = ({ }) => {
  return (
    <>
      <Box marginVertical="m">
        <Header title="Search" />
      </Box>
      <Box
        borderRadius="s"
        paddingHorizontal="m"
        flexDirection="row"
        alignItems="center"
        backgroundColor="text"
      >
        <Icon name="search" color={theme.colors.primary} size={30} />
        <TextInput
          style={styles.searchInput}
          placeholder="Artists, songs, or podcasts"
        />
      </Box>

      <Box>
        <Text marginVertical="l" variant="title1">
          Your top genres
        </Text>
        <Box marginHorizontal="s">

          <Box flexDirection="row" justifyContent="space-between">
            <Box
              flexDirection="row"
              borderRadius="s"
              height={90}
              flex={1}
              backgroundColor="notification"
            >
              <Box flex={1}>
                <Text
                  color="text"
                  marginVertical="m"
                  marginHorizontal="m"
                  variant="body"
                >
                  Rock
                </Text>
              </Box>
            </Box>

            <Box width={30} />
            <Box borderRadius="s" flex={1} backgroundColor="notification">
              <Text
                color="text"
                marginVertical="m"
                marginHorizontal="m"
                variant="body"
              >
                Dance/ Electronic
              </Text>
            </Box>
          </Box>
        </Box>
        <Text marginVertical="l" variant="title1">
          Browse all
        </Text>
      </Box>
    </>
  );
}
const _renderItem = ({ item }: { item: any }) => {
  const r = () => Math.random() * 256 >> 0;
  const color = `rgb(${r()}, ${r()}, ${r()})`;
  return (
    <Box
      marginHorizontal="s"
      marginVertical="s"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box
        style={{ backgroundColor: color }}
        borderRadius="s"
        height={90}
        width={Dimensions.get("screen").width * 0.4}

      >
        <Text
          color="text"
          marginVertical="m"
          marginHorizontal="m"
          variant="body"
        >
          {item.type}
        </Text>
      </Box>
      <Box width={20} />
    </Box>
  );
};
const Search = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Box marginHorizontal="m">
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <SearchHeader />}
          numColumns={2}
          renderItem={_renderItem}
          data={Data}
          keyExtractor={(item, i) => item.id}
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,

  },
  searchInput: {
    backgroundColor: theme.colors.text,
    width: '100%',
    fontSize: 20,
    color: theme.colors.primary,

  }
});

export default Search;
