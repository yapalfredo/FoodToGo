import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
`;

const Loading = styled(ActivityIndicator).attrs({
  size: 50,
  animating: true,
  color: MD2Colors.blue300,
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      <>
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate("RestaurantDetail");
                }}
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </>
    </SafeArea>
  );
};
