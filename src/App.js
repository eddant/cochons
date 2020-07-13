import React from 'react';
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import Signin from "./Components/Sign/Signin";
import SignUp from "./Components/Sign/Signup";
import Orders from "./Components/Orders/Orders";
import NewOrder from "./Components/Orders/NewOrder";


function App() {
  return (
          <Switch>
              <RouteWithLayout layout={Layout}  exact path="/" component={Dashboard} />
              <RouteWithLayout layout={Layout}  exact path="/Orders" component={Orders}/>
              <RouteWithLayout layout={Layout} exact path="/Orders/New" component={NewOrder}/>
                <RouteWithLayout exact path="/signin" component={Signin} />
                <RouteWithLayout exact path="/signup" component={SignUp} />
            </Switch>
  );
}

function RouteWithLayout({layout, component, path, ...rest}){
    return (
        layout?
        <Route {...rest} render={(props) =>
            React.createElement( layout, props, React.createElement(component, props))
        }/>:<Route exact path={path} component={component} />
    );
}

export default App;
