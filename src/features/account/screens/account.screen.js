import React from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
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
