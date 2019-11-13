import React from 'react';
import { Redirect, Route, Switch} from "react-router-dom";
import Layout from './containers/Layout/Layout'
import home from './containers/Home/Home';


function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={home}/>
        <Redirect to="/"/>
      </Switch>
    </Layout>
  );
}

export default App;
