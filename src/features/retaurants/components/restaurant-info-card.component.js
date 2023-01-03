import React from "react";
import { StyleSheet } from "react-native";
import { Text, Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

//How to use styled components
//For all specified component
const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;
//Alternatively,
//This is how to use it for specific component
const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address = "100 Random St",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
