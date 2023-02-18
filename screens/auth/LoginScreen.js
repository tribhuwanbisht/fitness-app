import AuthContent from "./../../components/auth/AuthContent";
import { AuthContext } from "./../../store/auth-context";
import LoadingOverlay from "./../../components/ui/LoadingOverlay";
import { login } from "./../../util/auth";
import { useState, useContext } from "react";
import { Alert } from "react-native";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in. Please check your credentials and try again!"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;
