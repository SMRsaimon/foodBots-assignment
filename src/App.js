
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserInfo from "./components/UserInfo/UserInfo";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import NotMatch from "./components/NotMatch/NotMatch";
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
           <Navigation/>
            <UserInfo/>
          </Route>       
          <Route  path="/userInfo">
          <Navigation/>
            <UserInfo/>
          </Route>
          <Route  path="/orderSummary">
          <Navigation/>
            <OrderSummary/>
          </Route>
          <Route  path="/notMatch">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
