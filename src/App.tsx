import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./app/apollo";
import MainRoutes from "./app/routes";
import { UserProvider } from "./context/userProvider";

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
