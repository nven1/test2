import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Endpoints from "./app/endpoints";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import AddEvent from "./components/AddEvent/AddEvent";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import Login from "./components/LoginContainer/LoginContainer";
import MainApp from "./components/MainApp/MainApp";
import { selectAuth } from "./reducers/AuthReducer";
import { checkAuthState, initGapi } from "./utils/authHelpers";

function App() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  useEffect(() => {
    initGoogleApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initGoogleApi = async () => {
    await initGapi().then(() => {
      checkAuthState(dispatch);
    });
  };

  const renderContent = () => {
    switch (auth) {
      case null:
        return <div>Loading</div>;
      case true:
        return <MainApp />;
      case false:
        return <Login />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={renderContent()}>
          <Route
            path={Endpoints.appEndpoints.home}
            element={<HomeContainer />}
          />
          <Route path={Endpoints.appEndpoints.new} element={<AddEvent />} />
          <Route
            path={"*"}
            element={<Navigate to={Endpoints.appEndpoints.home} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
