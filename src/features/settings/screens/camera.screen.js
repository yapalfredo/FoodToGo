import React, { useRef, useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";

const ProfileCamera = styled(Camera)`
  flex: 1;
`;

const CameraContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={CameraType.front}
      ></ProfileCamera>
    </CameraContainer>
  );
};
