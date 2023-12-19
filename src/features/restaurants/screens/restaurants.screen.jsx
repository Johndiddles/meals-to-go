import React from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${isAndroid && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: rgba(250, 250, 250, 0.8);
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  gap: 16px;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer
        style={{
          padding: 16,
        }}
      >
        <Searchbar />
      </SearchContainer>

      {/* <RestaurantListContainer>
        <RestaurantInfoCard />
        <RestaurantInfoCard />
      </RestaurantListContainer> */}

      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
