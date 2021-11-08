import { loadAuth2WithProps, loadClientAuth2 } from "gapi-script";
import { AppDispatch } from "../app/store";
import { setLoginState } from "../reducers/AuthReducer";
import { Token } from "./storageKeys";

const clientId = process.env.REACT_APP_CLIENT_ID ?? "";
const apiKey = process.env.REACT_APP_API_KEY ?? "";
const scope = "https://www.googleapis.com/auth/calendar";
const discoveryDocs = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

export const checkAuthState = (dispatch: AppDispatch) => {
  const token = localStorage.getItem(Token);
  const isAuthenticated = token !== null;

  dispatch(setLoginState(isAuthenticated));
};

export const logoutHelper = (dispatch: AppDispatch) => {
  localStorage.removeItem(Token);

  dispatch(setLoginState(false));
};

export const initGapi = async () => {
  return loadAuth2WithProps(gapi, {
    clientId,
    apiKey,
    scope,
    discoveryDocs: discoveryDocs,
  }).then(() => {
    return loadClientAuth2(gapi, clientId, scope).then(async () => {
      await gapi.client.load("calendar", "v3");
    });
  });
};
