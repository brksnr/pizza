import { createRoot } from "react-dom/client";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Form from "./component/form";
import Onay from "./component/onay";
import Home from "./component/home";
import { useState } from "react";

function App() {
  const [liftFormData, setLiftFormData] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    not: "",
    adet:1
  });

  return (
    
    <Switch>
    <Route path="/home" exact>
    <Home/>
    </Route>
    <Route path="/onay"  exact>
    <Onay liftFormData={liftFormData}/>
    </Route>
    <Route path="/form" exact>
    <Form setLiftFormData={setLiftFormData}/>
    </Route>
    </Switch>
  )
}

export default App
