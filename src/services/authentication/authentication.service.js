import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth/react-native";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(getAuth(), email, password);

export const checkAuthState = (setUser, setIsLoading) => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setUser(user);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });
};

export const logoutRequest = (setUser) => {
  setUser(null);
  getAuth().signOut();
};
