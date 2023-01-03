import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

//This makes sure it works both Android and iOS
const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: 16px;
  background-color: green;
`;

const RestaurantListContainer = styled.View`
  padding: 16px;
  background-color: blue;
  flex: 1;
`;

export const RestaurantsScreen = () => (
  <SafeArea style={styles.container}>
    <SearchContainer style={styles.search}>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer style={styles.list}>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
