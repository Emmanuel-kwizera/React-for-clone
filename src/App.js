import React from 'react';
import { Route, Switch } from "react-router-dom";
// import {BrowserView, MobileView} from "react-device-detect"
import { Webpage } from './components/Webpage';
import { MobileNav } from "./components/MobileNav";
import Login from './components/modal';
import Signup from './components/signup';
import NotFound from './components/reusable/NotFound';
import HomeDashboard from './components/services/HomeDashboard';
import './App.css';

function App() {
  const state = {
      showModal: true, 
  }
  return (
    <div className="App">
      {/* <Webpage/> */}
      {/* <BrowserView> */}
      <Switch>
        <Route exact path="/">
          <Webpage/>
        </Route>

        <Route exact path="/login">
          <Webpage/>
          < Login visible={state.showModal}/>
        </Route>

        <Route exact path="/signup">
          <Webpage className="overflow-y-hidden"/>
          <Signup visible={state.showModal}/>
        </Route>
        <Route exact path={"/home"}>
          <HomeDashboard/>
        </Route>
        <Route exact path="/navigation">
          <MobileNav/>
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>

      </Switch>      
      {/* </BrowserView>

      <MobileView>
      <Switch>
        <Route exact path="/">
          <Webpage/>
        </Route>

        <Route exact path="/login">
          <Webpage/>
          < Login visible={state.showModal}/>
        </Route>

        <Route exact path="/signup">
          <Webpage className="overflow-y-hidden"/>
          <Signup visible={state.showModal}/>
        </Route>
        <Route exact path="/navigation">
          <MobileNav/>
        </Route>
        <Route exact path={"/home"}>
          not sure about this !
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>

      </Switch>
      </MobileView> */}
    </div>
  );
}

export default App;

