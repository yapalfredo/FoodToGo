import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth/react-native";

export const loginRequest = async (email, password) =>
  await signInWithEmailAndPassword(getAuth(), email, password);

export const registerRequest = async (email, password) =>
  await createUserWithEmailAndPassword(getAuth(), email, password);

export const checkAuthState = async (setUser, setIsLoading) => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setUser(user);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });
};

export const logoutRequest = async (setUser) => {
  setUser(null);
  await getAuth().signOut();
};
