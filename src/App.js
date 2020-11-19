import React from "react";
import { Route, Switch } from "react-router-dom";


//import pages
import HomePage from "./components/homepage";

//import components for router
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
/* import pdf from './bachelorUSA.pdf'; */



const App = () =>{

  return (
   <>
   <Switch>
   <Route path="/contact"
      render={(props)=>(
        <Contact {...props} />
      )}
    />
    <Route path="/blog"
      render={(props)=>(
        <Blog {...props} />
      )}
    />
    <Route path="/portfolio"
      render={(props)=>(
        <Portfolio {...props} />
      )}
    />
    <Route path="/resume"
           render={(props) =>(
           <Resume {...props} />
            )} >
    </Route>
    <Route exact path="/" 
      render={(props) =>(
        <HomePage {...props} />
      )}
    />
  </Switch>
   </>
  );
}

export default App;
