import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

//This makes sure it works both Android and iOS
export const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;
