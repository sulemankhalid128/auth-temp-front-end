import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, NextLink, Operation, from } from "@apollo/client";

const httpLink = new HttpLink({
    uri: `${process.env.REACT_APP_API_BASE_URL}/graphql`
  });

  const authMiddleware = new ApolloLink((operation: Operation, forward: NextLink) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  
    return forward(operation);
  });
  

const client = new ApolloClient({
    cache: new InMemoryCache(),
    connectToDevTools: true,
    link: from([authMiddleware, httpLink]),
  });
  export default client;