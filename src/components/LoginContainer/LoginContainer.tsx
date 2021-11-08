import GoogleLogin from "react-google-login";
import { useAppDispatch } from "../../app/hooks";
import { checkAuthState } from "../../utils/authHelpers";
import { Token } from "../../utils/storageKeys";
import Login from "../Login/Login";

const client_id = process.env.REACT_APP_CLIENT_ID ?? "";

const LoginContainer = () => {
  const dispatch = useAppDispatch();

  const handleSuccess = ({ accessToken }: any) => {
    localStorage.setItem(Token, accessToken);
    checkAuthState(dispatch);
  };

  const handleFailure = (res: any) => {};

  return (
    <Login>
      <GoogleLogin
        clientId={client_id}
        onSuccess={handleSuccess}
        onFailure={handleFailure}
      />
    </Login>
  );
};

export default LoginContainer;
