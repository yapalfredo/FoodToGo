import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  AccountBackground,
  LoginInput,
  AccountCover,
  AccountContainer,
  AuthButton,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Food To Go</Title>
      <AccountContainer>
        <LoginInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large" />
        <LoginInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer size="large" />
        <LoginInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(rp) => setRepeatedPassword(rp)}
        />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            onPress={() => onRegister(email, password, repeatedPassword)}
            icon="email"
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </AccountContainer>
      <Spacer size="large">
        <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
