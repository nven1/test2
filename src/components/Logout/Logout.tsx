import { useGoogleLogout } from "react-google-login";
import { useAppDispatch } from "../../app/hooks";
import { logoutHelper } from "../../utils/authHelpers";

const client_id = process.env.REACT_APP_CLIENT_ID ?? "";

const Logout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();

  const onSuccess = () => {
    logoutHelper(dispatch);
  };

  const { signOut } = useGoogleLogout({
    clientId: client_id,
    onLogoutSuccess: onSuccess,
  });

  return <div onClick={signOut}>{children}</div>;
};

export default Logout;
