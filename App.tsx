import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import AuthContextProvider from "./src/contexts/AuthContext";
import { Authenticator } from "@aws-amplify/ui-react-native";
import outputs from "./amplify_outputs.json";

Amplify.configure(outputs);

const App = () => {
  return (
    <Authenticator.Provider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </Authenticator.Provider>
  );
};

export default App;
