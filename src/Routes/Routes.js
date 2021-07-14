import ChatPage from "../Pages/ChatPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute from "../Contexts/PrivateRoute";
import { Redirect, Route, Switch } from "react-router-dom";
import AddStage from "../Components/AddStage";
import NotFound from "../Pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/add-stage" component={AddStage} />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute path="/" component={ChatPage} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
};

export default Routes;
