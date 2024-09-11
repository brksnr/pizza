import { createRoot } from "react-dom/client";

import { Route, Router, Routes, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Form from "./component/form";
import Onay from "./component/onay";
import Home from "./component/home";

function App() {


  return (
    
    <Switch>
    <Route path="/home" exact>
    <Home/>
    </Route>
    <Route path="/onay"  exact>
    <Onay/>
    </Route>
    <Route path="/form" exact>
    <Form/>
    </Route>
    
    </Switch>
  )
}

export default App
