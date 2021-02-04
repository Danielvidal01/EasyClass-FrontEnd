import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from '../LandingPage';
import RegisterPage from '../RegisterPage';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/Cadastro' component={RegisterPage}/>

        </Switch>
    </BrowserRouter>
  );
}