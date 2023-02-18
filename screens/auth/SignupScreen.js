import AuthContent from "./../../components/auth/AuthContent";
import { AuthContext } from "./../../store/auth-context";
import LoadingOverlay from "./../../components/ui/LoadingOverlay";
import { createUser } from "./../../util/auth";
import { useState, useContext } from "react";
import { Alert } from "react-native";
const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Authentication failed",
        "Could not create user. Please check your input and try again!"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
