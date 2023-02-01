import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const CameraContainer = styled(View)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: "camera",
})`
  position: absolute;
  top: 90%;
  align-self: center;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Requires Access To Camera</Text>;
  }

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={CameraType.front}
        ratio={"16:9"}
      />
      <CameraButton onPress={snap}>snap</CameraButton>
    </CameraContainer>
  );
};
