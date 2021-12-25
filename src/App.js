
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Layout from "./components/layout/Layout";
import Advise from "./pages/Advise";
import User from "./pages/User"
import AboutUs from "./pages/AboutUs"
import OurServices from "./pages/OurServices"
function App() {
  return (
    <Layout>
      <Switch>
        
        <Route path="/dashboard" exact>
          <Dashboard/>
        </Route>

        <Route path="/advise">
          <Advise></Advise>
        </Route>
        <Route path="/transaction">
          <Transactions></Transactions>
        </Route>
        <Route path="/services">
          <OurServices></OurServices>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/user">
          <User></User>
        </Route>
      </Switch>
      </Layout>
  );
}

export default App;
