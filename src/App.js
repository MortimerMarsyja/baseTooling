//Deps
import React,{Suspense} from 'react';
//logo
//styles
import {StyledApp} from './07-Styles/app.style';
//Paths
import PATHS from './04-Constants/Routes'
//Components
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


//Pages
const MainPage = React.lazy(()=>import('./01-Pages/MainPage'));
const OutOfBounds = React.lazy(()=>import('./01-Pages/OutOfBounds'));



const COMPONENT_PATHS = [
  {Component:MainPage,path:PATHS.MAIN_PAGE},
  {Component:OutOfBounds,path:PATHS.OUT_OF_BOUNDS},
]

function App() {
  return (
    <StyledApp>
        <BrowserRouter>
        <Switch>
          {COMPONENT_PATHS.map(({path,Component})=>(
            <Route path={path} exact key={path}>
              <Suspense fallback={<div>loading...</div>}>
                <Component/>
              </Suspense>
            </Route>
          ))}
            <Redirect to={PATHS.PAGE_NOT_FOUND}/>
        </Switch>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
