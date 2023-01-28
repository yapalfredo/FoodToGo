import React from "react";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          source={require("../../../../assets/food-animation.json")}
          autoPlay
          loop
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          onPress={() => navigation.navigate("Login")}
          icon="lock-open-outline"
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          onPress={() => navigation.navigate("Register")}
          icon="email"
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
