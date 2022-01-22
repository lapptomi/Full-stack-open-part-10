import { useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const res = await mutate({
      variables: {
        credentials: {
          username, password
        }
      }
    });

    await authStorage.setAccessToken(res.data.authenticate.accessToken);
    apolloClient.resetStore();

    return res;
  };

  return [signIn, result];
};

export default useSignIn;
