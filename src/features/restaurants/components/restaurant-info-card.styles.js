import styled from "styled-components/native";
import { Card } from "react-native-paper";

//How to use styled components
//For all specified component
// const Title = styled.Text`
//   font-size: ${(props) => props.theme.fontSizes.body}
//   color: ${(props) => props.theme.colors.ui.primary};
//   font-family: ${(props) => props.theme.fonts.heading};
// `;

export const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption}
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

//Alternatively,
//This is how to use it for specific component
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
