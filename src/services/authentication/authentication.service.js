import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password);
