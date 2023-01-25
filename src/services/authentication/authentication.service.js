import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(getAuth(), email, password);
